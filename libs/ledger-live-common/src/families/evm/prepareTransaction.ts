import { ethers } from "ethers";
import BigNumber from "bignumber.js";
import { getFeesEstimation, getGasEstimation } from "./api/rpc";
import {
  EvmTransactionEIP1559,
  EvmTransactionLegacy,
  Transaction as EvmTransaction,
} from "./types";
import { Account, TokenAccount } from "@ledgerhq/types-live";
import { getEstimatedFees } from "./logic";
import ERC20ABI from "./abis/erc20.abi.json";
import { estimateMaxSpendable } from "./estimateMaxSpendable";
import { validateAmount, validateRecipient } from "./getTransactionStatus";

export const getTransactionData = async (
  tokenAccount: TokenAccount,
  transaction: EvmTransaction
): Promise<Buffer | undefined> => {
  const { token } = tokenAccount;
  const contract = new ethers.Contract(token.contractAddress, ERC20ABI);
  const { data } = await contract.populateTransaction.transfer(
    transaction.recipient,
    transaction.amount.toFixed()
  );

  return data ? Buffer.from(data.slice(2), "hex") : undefined;
};

export const prepareTransaction = async (
  account: Account,
  transaction: EvmTransaction
): Promise<EvmTransaction> => {
  const { currency } = account;

  const subAccount = transaction.subAccountId
    ? account.subAccounts?.find(({ id }) => id === transaction.subAccountId)
    : null;
  const isTokenSend =
    transaction.mode === "send" && subAccount?.type === "TokenAccount";

  const data = isTokenSend
    ? await getTransactionData(subAccount, transaction)
    : undefined;
  const recipient = isTokenSend
    ? subAccount.token.contractAddress
    : transaction.recipient;
  const transactionWithdata: EvmTransaction = {
    ...transaction,
    data,
    recipient,
  };

  const estimatedFees = getEstimatedFees(transactionWithdata);
  // Not final amount (cause it could change depending on tx type) used for gas estimation
  // Some RPCs will throw at gas estimation if the account doesn't have the required amount first
  const tempAmount = (() => {
    if (isTokenSend) {
      return transactionWithdata.useAllAmount
        ? subAccount.balance
        : transactionWithdata.amount;
    }
    return transactionWithdata.useAllAmount
      ? account.balance.minus(estimatedFees)
      : transactionWithdata.amount;
  })();
  const totalSpent = subAccount ? tempAmount : tempAmount?.plus(estimatedFees);

  const [recipientvalidationErrors] = validateRecipient(
    account,
    transactionWithdata
  );
  const [amountValidationErrors] = validateAmount(
    subAccount || account,
    transactionWithdata,
    totalSpent
  );
  const { recipient: recipientErrors } = recipientvalidationErrors || {};
  const { amount: amountErrors } = amountValidationErrors || {};
  const [gasLimit, feeData] = await Promise.all([
    // Validating recipient and amount first cause estimating a transaction with a wrong recipient or wrong amount will throw an error
    recipientErrors || amountErrors
      ? Promise.resolve(new BigNumber(21000))
      : getGasEstimation(account, transactionWithdata),
    // Fee data is not dependent on the gasEstimation so they can be triggered in parallel
    getFeesEstimation(currency),
  ]);

  // First the transaction is creating with its correct type, in order for the `estimateMaxSpendable` to be correct
  // Doing the `estimateMaxSpendable` first would give a potentially incorrect amount if the transaction if transform from a
  // type 2 to a type 0 (1559 to Legacy)
  const typedTransaction = (() => {
    // If the blockchain is supporting EIP-1559, use maxFeePerGas & maxPriorityFeePerGas
    if (feeData.maxFeePerGas && feeData.maxPriorityFeePerGas) {
      delete transactionWithdata.gasPrice;
      return {
        ...transactionWithdata,
        gasLimit,
        maxFeePerGas: feeData.maxFeePerGas || undefined,
        maxPriorityFeePerGas: feeData.maxPriorityFeePerGas || undefined,
        type: 2,
      } as EvmTransactionEIP1559;
    }

    // Else just use a legacy transaction
    delete transactionWithdata.maxFeePerGas;
    delete transactionWithdata.maxPriorityFeePerGas;
    return {
      ...transactionWithdata,
      gasLimit,
      gasPrice: feeData.gasPrice || new BigNumber(0),
      type: 0,
    } as EvmTransactionLegacy;
  })();

  const amount = transactionWithdata.useAllAmount
    ? await estimateMaxSpendable({
        account: subAccount || account,
        parentAccount: account,
        transaction: typedTransaction,
      })
    : transactionWithdata.amount;

  return {
    ...typedTransaction,
    amount,
  };
};
