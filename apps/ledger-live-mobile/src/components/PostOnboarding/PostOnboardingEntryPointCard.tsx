import React, { useCallback } from "react";
import { Flex, Icons, Text, Button } from "@ledgerhq/native-ui";
import { useTranslation } from "react-i18next";
import { getDeviceModel } from "@ledgerhq/devices";
import { useDispatch, useSelector } from "react-redux";
import { usePostOnboardingEntryPointVisibleOnWallet } from "@ledgerhq/live-common/postOnboarding/hooks/index";
import { hidePostOnboardingWalletEntryPoint } from "@ledgerhq/live-common/postOnboarding/actions";
import { postOnboardingDeviceModelIdSelector } from "@ledgerhq/live-common/postOnboarding/reducer";
import { useNavigateToPostOnboardingHubCallback } from "../../logic/postOnboarding/useNavigateToPostOnboardingHubCallback";
import Touchable from "../Touchable";

const PostOnboardingEntryPointCard: React.FC<Record<string, never>> = () => {
  const { t } = useTranslation();
  const deviceModelId = useSelector(postOnboardingDeviceModelIdSelector);
  const productName = deviceModelId
    ? getDeviceModel(deviceModelId)?.productName
    : null;
  const dispatch = useDispatch();
  const openHub = useNavigateToPostOnboardingHubCallback();
  const dismissCard = useCallback(() => {
    dispatch(hidePostOnboardingWalletEntryPoint());
  }, [dispatch]);
  const visible = usePostOnboardingEntryPointVisibleOnWallet();
  if (!visible) return null;
  return (
    <Flex
      flexDirection="column"
      backgroundColor="neutral.c20"
      borderRadius={2}
      p={6}
    >
      <Flex flexDirection="row" justifyContent="flex-end" alignItems="center">
        <Touchable onPress={dismissCard}>
          <Flex borderRadius={9999} p={3} backgroundColor="neutral.c30">
            <Icons.CloseMedium size={20} />
          </Flex>
        </Touchable>
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Text variant="h5" fontWeight="semiBold" my={3} textAlign="center">
          {t("postOnboarding.entryPointCard.title", { productName })}
        </Text>
        <Text
          variant="paragraph"
          fontWeight="medium"
          textAlign="center"
          color="neutral.c80"
          mb={6}
        >
          {t("postOnboarding.entryPointCard.description", { productName })}
        </Text>
        <Button alignSelf="stretch" type="main" outline onPress={openHub}>
          {t("postOnboarding.entryPointCard.buttonLabel")}
        </Button>
      </Flex>
    </Flex>
  );
};

export default PostOnboardingEntryPointCard;
