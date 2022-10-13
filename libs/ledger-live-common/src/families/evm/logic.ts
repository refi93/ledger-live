import { Account, Operation, SubAccount } from "@ledgerhq/types-live";
import BigNumber from "bignumber.js";
import { mergeOps } from "../../bridge/jsHelpers";
import {
  Transaction as EvmTransaction,
  EvmTransactionEIP1559,
  EvmTransactionLegacy,
} from "./types";

/**
 * Helper to check if a legacy transaction has the right fee property
 */
export const legacyTransactionHasFees = (tx: EvmTransactionLegacy): boolean =>
  Boolean((!tx.type || tx.type < 2) && tx.gasPrice);

/**
 * Helper to check if a legacy transaction has the right fee property
 */
export const eip1559TransactionHasFees = (tx: EvmTransactionEIP1559): boolean =>
  Boolean(tx.type === 2 && tx.maxFeePerGas && tx.maxPriorityFeePerGas);

/**
 * Helper to get total fee value for a tx depending on its type
 */
export const getEstimatedFees = (tx: EvmTransaction): BigNumber => {
  if (tx.type !== 2) {
    return (
      (tx as EvmTransactionLegacy)?.gasPrice?.multipliedBy(tx.gasLimit) ||
      new BigNumber(0)
    );
  }
  return (
    (tx as EvmTransactionEIP1559)?.maxFeePerGas?.multipliedBy(tx.gasLimit) ||
    new BigNumber(0)
  );
};

const updatableSubAccountProperties = [
  { name: "balance", isOps: false },
  { name: "spendableBalance", isOps: false },
  { name: "operationsCount", isOps: false },
  { name: "balanceHistoryCache", isOps: false },
  { name: "operations", isOps: true },
  { name: "pendingOperations", isOps: true },
];

export const mergeSubAccounts = (
  initialAccount: Account | undefined,
  newSubAccounts: Partial<SubAccount>[]
): Array<Partial<SubAccount> | SubAccount> => {
  const oldSubAccounts: Array<Partial<SubAccount> | SubAccount> | undefined =
    initialAccount?.subAccounts;
  if (!oldSubAccounts) return newSubAccounts;

  const oldSubAccountsById: { [key: string]: Partial<SubAccount> } = {};
  for (const oldSubAccount of oldSubAccounts) {
    oldSubAccountsById[oldSubAccount.id!] = oldSubAccount;
  }

  const newAccountsToAdd: Partial<SubAccount>[] = [];
  for (const newSubAccount of newSubAccounts) {
    const duplicatedAccount: Partial<SubAccount> | undefined =
      oldSubAccountsById[newSubAccount.id!];

    // If this sub account was not already in the initialAccount
    if (!duplicatedAccount) {
      // We'll add it later
      newAccountsToAdd.push(newSubAccount);
      continue;
    }

    updatableSubAccountProperties.forEach(({ name, isOps }) => {
      if (!isOps) {
        if (newSubAccount[name] !== duplicatedAccount[name]) {
          duplicatedAccount[name] = newSubAccount[name];
        }
      } else {
        duplicatedAccount[name] = mergeOps(
          duplicatedAccount[name],
          newSubAccount[name]
        );
      }
    });
  }

  // We add the potential new subaccounts to the already existing ones
  oldSubAccounts?.push(...newAccountsToAdd);

  return oldSubAccounts;
};
