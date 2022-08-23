// @flow
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { BigNumber } from "bignumber.js";
import invariant from "invariant";
import styled from "styled-components";
import { withTranslation, Trans } from "react-i18next";
import type { TFunction } from "react-i18next";
import type { Account, TransactionStatus } from "@ledgerhq/live-common/types/index";
import type { Transaction } from "@ledgerhq/live-common/families/ethereum/types";
import { useSendAmount } from "@ledgerhq/live-common/countervalues/react";
import { counterValueCurrencySelector } from "~/renderer/reducers/settings";
import Label from "~/renderer/components/Label";
import { formatCurrencyUnit } from "@ledgerhq/live-common/currencies/index";
import { getAccountBridge } from "@ledgerhq/live-common/bridge/index";
import FeeSliderField from "~/renderer/components/FeeSliderField";
import InputCurrency from "~/renderer/components/InputCurrency";
import { inferDynamicRange } from "@ledgerhq/live-common/range";
import Box from "~/renderer/components/Box";
import LabelWithExternalIcon from "~/renderer/components/LabelWithExternalIcon";
import { urls } from "~/config/urls";
import { openURL } from "~/renderer/linking";
import { track } from "~/renderer/analytics/segment";
import TranslatedError from "~/renderer/components/TranslatedError";

const ErrorContainer = styled(Box)`
  margin-top: 0px;
  font-size: 10px;
  width: 100%;
  transition: all 0.4s ease-in-out;
  will-change: max-height;
  max-height: ${p => (p.hasError ? 60 : 0)}px;
  min-height: ${p => (p.hasError ? 22 : 0)}px;
  `;
  
const ErrorDisplay = styled(Box)`
  color: ${p => p.theme.colors.pearl};
`;

const WarningDisplay = styled(Box)`
  color: ${p => p.theme.colors.warning};
`;

type Props = {
  account: Account,
  transaction: Transaction,
  status: TransactionStatus,
  updateTransaction: (updater: any) => void,
};

const fallbackMaxPriorityFeePerGas = inferDynamicRange(BigNumber(10e9));
let lastNetworkPriorityFee;

const FeesField = ({
  account,
  transaction,
  status,
  updateTransaction,
  t
}: Props & { t: TFunction }) => {
  invariant(transaction.family === "ethereum", "FeeField: ethereum family expected");

  const bridge = getAccountBridge(account);

  const onPriorityFeeChange = useCallback(
    priorityFee => {
      updateTransaction(transaction =>
        bridge.updateTransaction(transaction, { maxPriorityFeePerGas: priorityFee, feesStrategy: "advanced" })
      );
    },
    [updateTransaction, bridge],
  );

  const networkPriorityFee = transaction.networkInfo && transaction.networkInfo.maxPriorityFeePerGas;
  if (!lastNetworkPriorityFee && networkPriorityFee) {
    lastNetworkPriorityFee = networkPriorityFee;
  }
  const range = networkPriorityFee || lastNetworkPriorityFee || fallbackMaxPriorityFeePerGas;

  const maxPriorityFee = transaction.maxPriorityFeePerGas || range.initial;
  const { units } = account.currency;
  const unit = units.length > 1 ? units[1] : units[0];
  const unitName = unit.code;

  const fiatCurrency = useSelector(counterValueCurrencySelector);
  const validTransactionError = status.errors.maxPriorityFee;
  const validTransactionWarning = status.warnings.maxPriorityFee;

  const { cryptoUnit, fiatAmount, fiatUnit, calculateCryptoAmount } = useSendAmount({
    account,
    fiatCurrency,
    cryptoAmount: maxPriorityFee
  });

  return (
    <Box mb={1}>
      <LabelWithExternalIcon
        onClick={() => {
          openURL(urls.feesEIP1559MoreInfo);
          track("Send Flow EIP1559 Fees Help Requested");
        }}
        label={t("send.steps.details.ethereumPriorityFee", { unitName })}
      />
      <Box mt={2} mb={2}>
        <InputCurrency
          hideErrorMessage
          error={validTransactionError}
          warning={validTransactionWarning}
          containerProps={{ grow: true }}
          defaultUnit={unit}
          value={maxPriorityFee}
          onChange={onPriorityFeeChange}
          renderRight={<InputRight>
            = {formatCurrencyUnit(fiatUnit, fiatAmount, { showCode: true})}
          </InputRight>}
        />
      </Box>
      <ErrorContainer hasError={validTransactionError || validTransactionWarning}>
        {validTransactionError ? (
          <ErrorDisplay id="input-error">
            <TranslatedError error={validTransactionError} />
          </ErrorDisplay>
        ) : validTransactionWarning ? (
          <WarningDisplay id="input-warning">
            <TranslatedError error={validTransactionWarning} />
          </WarningDisplay>
        ) : null}
      </ErrorContainer>
      <Label>
        <span>
          <Trans
            i18nKey="send.steps.details.suggestedPriorityFee"
            values={{
              lowPriorityFee: formatCurrencyUnit(unit, range.min),
              highPriorityFee: formatCurrencyUnit(unit, range.max),
              unitName
            }}
          />
        </span>
      </Label>
    </Box>
  );
};

const InputRight = styled(Box).attrs(() => ({
  ff: "Inter|Medium",
  color: "palette.text.shade60",
  fontSize: 4,
  justifyContent: "center",
}))`
  padding-right: 10px;
`;

export default withTranslation()(FeesField);