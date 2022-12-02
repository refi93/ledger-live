import React, { useMemo } from "react";
import { Image } from "react-native";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Text, ScrollListContainer, Flex } from "@ledgerhq/native-ui";
import { getDeviceModel } from "@ledgerhq/devices/index";
import useFeature from "@ledgerhq/live-common/featureFlags/useFeature";
import { DeviceModelId } from "@ledgerhq/types-devices";
import { TrackScreen } from "../../../analytics";
import { ScreenName, NavigatorName } from "../../../const";
import { OnboardingNavigatorParamList } from "../../../components/RootNavigator/types/OnboardingNavigator";
import {
  BaseNavigationComposite,
  RootNavigationComposite,
  StackNavigatorNavigation,
} from "../../../components/RootNavigator/types/helpers";

import nanoSSvg from "../assets/nanoS";
import nanoSPSvg from "../assets/nanoSP";
import nanoXSvg from "../assets/nanoX";
import DeviceSetupView from "../../../components/DeviceSetupView";
import { RootStackParamList } from "../../../components/RootNavigator/types/RootNavigator";
import { NavigateInput } from "../../../components/RootNavigator/types/BaseNavigator";
import ChoiceCard from "./ChoiceCard";

const nanoX = {
  SvgDevice: nanoXSvg,
  source: require("../../../../assets/images/devices/NanoXCropped.png"),
  id: DeviceModelId.nanoX,
  setupTime: 600000,
};
const nanoS = {
  SvgDevice: nanoSSvg,
  source: require("../../../../assets/images/devices/NanoSCropped.png"),
  id: DeviceModelId.nanoS,
  setupTime: 600000,
};
const nanoSP = {
  SvgDevice: nanoSPSvg,
  source: require("../../../../assets/images/devices/NanoSPCropped.png"),
  id: DeviceModelId.nanoSP,
  setupTime: 600000,
};
const nanoFTS = {
  SvgDevice: nanoXSvg,
  source: require("../../../../assets/images/devices/StaxCropped.png"),
  id: DeviceModelId.nanoFTS,
  setupTime: 300000,
};

type NavigationProp = RootNavigationComposite<
  BaseNavigationComposite<
    StackNavigatorNavigation<
      OnboardingNavigatorParamList,
      ScreenName.OnboardingDeviceSelection
    >
  >
>;

function OnboardingStepDeviceSelection() {
  const navigation = useNavigation<NavigationProp>();
  const { t } = useTranslation();
  const { colors } = useTheme();
  const syncOnboarding = useFeature("syncOnboarding" as const);

  const devices = useMemo(() => {
    if (syncOnboarding?.enabled) {
      return [nanoFTS, nanoX, nanoSP, nanoS];
    }
    return [nanoX, nanoSP, nanoS];
  }, [syncOnboarding?.enabled]);

  const getProductName = (modelId: DeviceModelId) =>
    getDeviceModel(modelId)?.productName || modelId;

  const next = (deviceModelId: DeviceModelId) => {
    // Add NanoX.id, NanoSP.id etc, to the array when supported
    if ([nanoFTS.id].includes(deviceModelId)) {
      const navigateInput: NavigateInput<RootStackParamList> = {
        name: NavigatorName.BaseOnboarding,
        params: {
          screen: NavigatorName.SyncOnboarding,
          params: {
            screen: ScreenName.SyncOnboardingCompanion,
            params: {
              // @ts-expect-error BleDevicePairingFlow will set this param
              device: null,
            },
          },
        },
      };
      // On pairing success, navigate to the Sync Onboarding Companion
      // navigation.push on stack navigation because with navigation.navigate
      // it could not go back to this screen in certain cases.
      navigation.push(NavigatorName.Base, {
        screen: ScreenName.BleDevicePairingFlow,
        params: {
          // TODO: for now we remove this
          filterByDeviceModelId: DeviceModelId.nanoFTS,
          areKnownDevicesDisplayed: true,
          onSuccessAddToKnownDevices: false,
          onSuccessNavigateToConfig: {
            // navigation.push on success because it could not correctly
            // go back to the previous screens (BLE and then this screen).
            navigationType: "push",
            navigateInput,
            pathToDeviceParam: "params.params.params.device",
          },
        },
      });
    } else {
      // TODO: FIX @react-navigation/native using Typescript
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore next-line
      navigation.navigate(ScreenName.OnboardingUseCase, {
        deviceModelId,
      });
    }
  };

  return (
    <DeviceSetupView hasBackButton>
      <ScrollListContainer flex={1} mx={6}>
        <TrackScreen category="Onboarding" name="SelectDevice" />
        <Text variant="h4" mb={7} fontWeight="semiBold">
          {t("syncOnboarding.deviceSelection.title")}
        </Text>
        {devices.map(device => (
          <ChoiceCard
            key={device.id}
            event="Onboarding Device - Selection"
            eventProperties={{ id: device.id }}
            testID={`Onboarding Device - Selection|${device.id}`}
            title={getProductName(device.id)}
            titleProps={{ variant: "large", fontWeight: "semiBold" }}
            onPress={() => next(device.id)}
            labelBadge={t("syncOnboarding.deviceSelection.setupTime", {
              time: device.setupTime / 60000,
            })}
            Image={
              <Image
                source={device.source}
                resizeMode="contain"
                style={{
                  height: "100%",
                  width: 140,
                }}
              />
            }
          />
        ))}
      </ScrollListContainer>
    </DeviceSetupView>
  );
}

export default OnboardingStepDeviceSelection;
