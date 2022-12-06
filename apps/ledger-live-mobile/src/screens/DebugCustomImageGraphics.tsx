import React, { useCallback, useEffect, useState } from "react";
import { LayoutChangeEvent, StyleSheet } from "react-native";
import {
  Button,
  Divider,
  Flex,
  InfiniteLoader,
  Switch,
  Text,
} from "@ledgerhq/native-ui";
import { useTranslation } from "react-i18next";
import { DeviceModelId } from "@ledgerhq/devices";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Slider from "react-native-slider";
import NavigationScrollView from "../components/NavigationScrollView";
import {
  transferConfig,
  previewConfig,
  FramedImageWithContext,
  ImageSourceContext,
} from "../components/CustomImage/FramedImage";
import { ImageFileUri } from "../components/CustomImage/types";
import { downloadImageToFile } from "../components/CustomImage/imageUtils";
import useCenteredImage, {
  CenteredResult,
} from "../components/CustomImage/useCenteredImage";
import { targetDimensions } from "./CustomImage/shared";
import confirmLockscreen from "../animations/nanoFTS/customimage/confirmLockscreen.json";
import allowConnection from "../animations/nanoFTS/customimage/allowConnection.json";
import { FramedImageWithLottieWithContext } from "../components/CustomImage/FramedImageWithLottie";
import {
  renderImageCommitRequested,
  renderImageLoadRequested,
  renderLoadingImage,
} from "../components/DeviceAction/rendering";

const imageUrl =
  "https://images.unsplash.com/photo-1612988952181-c995680479a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3085&q=80";

const device = {
  deviceId: "",
  deviceName: "",
  modelId: DeviceModelId.nanoFTS,
  wired: false,
};

export default function DebugCustomImageGraphics() {
  const [imageToCrop, setImageToCrop] = useState<ImageFileUri | null>(null);
  const [croppedImage, setCroppedImage] = useState<CenteredResult | null>(null);
  const [, setError] = useState<Error>();
  const [showAllAssets, setShowAllAssets] = useState(false);
  const [deviceActionStep, setDeviceActionStep] = useState("confirmLoad");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    downloadImageToFile({
      imageUrl,
    }).resultPromise.then(val => setImageToCrop(val));
  }, []);

  useCenteredImage({
    ...imageToCrop,
    targetDimensions,
    onResult: setCroppedImage,
    onError: setError,
  });

  const { t } = useTranslation();

  const insets = useSafeAreaInsets();

  const [paddingBottom, setPaddingBottom] = useState(0);
  const onDebugMenuLayout = useCallback((layoutEvent: LayoutChangeEvent) => {
    setPaddingBottom(layoutEvent.nativeEvent.layout.height);
  }, []);

  const loader = croppedImage?.imageBase64DataUri ? null : (
    <Flex flex={1} justifyContent="center" alignItems="center">
      <InfiniteLoader />
    </Flex>
  );

  const slider = (
    <Slider
      value={progress}
      minimumValue={0}
      maximumValue={1}
      step={0.01}
      onValueChange={val => typeof val === "number" && setProgress(val)}
    />
  );

  return (
    <ImageSourceContext.Provider
      value={{ source: { uri: croppedImage?.imageBase64DataUri } }}
    >
      {showAllAssets ? (
        <NavigationScrollView contentContainerStyle={{ paddingBottom }}>
          <Flex style={styles.root}>
            <Text mb={3}>lottie: allowConnection</Text>
            <FramedImageWithLottieWithContext
              loadingProgress={0}
              lottieSource={allowConnection}
            />
            <Divider />
            <Text mb={3}>lottie: confirmLockscreen</Text>
            <FramedImageWithLottieWithContext
              loadingProgress={0.89}
              lottieSource={confirmLockscreen}
            />
            <Divider />
            <Text>FramedImage component, transferConfig</Text>
            <Text mb={3}>progress={Math.round(progress * 100) / 100}</Text>
            <FramedImageWithContext
              frameConfig={transferConfig}
              style={{ backgroundColor: "red" }}
              loadingProgress={progress}
            >
              {loader}
            </FramedImageWithContext>
            {slider}
            <Divider />
            <Text mb={3}>FramedImage component, previewConfig</Text>
            <FramedImageWithContext frameConfig={previewConfig}>
              {loader}
            </FramedImageWithContext>
          </Flex>
        </NavigationScrollView>
      ) : (
        <Flex flex={1}>
          {deviceActionStep === "confirmLoad"
            ? renderImageLoadRequested({ t, device })
            : deviceActionStep === "loading"
            ? renderLoadingImage({ t, device, progress })
            : renderImageCommitRequested({ t, device })}
        </Flex>
      )}
      <Flex
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        style={{ paddingBottom: insets.bottom }}
        backgroundColor="neutral.c40"
        onLayout={onDebugMenuLayout}
      >
        <Flex p={4}>
          <Switch
            checked={showAllAssets}
            label="Show all assets"
            onChange={setShowAllAssets}
          />
          {showAllAssets ? null : (
            <Flex mt={3}>
              {deviceActionStep === "loading" ? slider : null}
              <Flex mt={3} flexDirection={"row"}>
                {["confirmLoad", "loading", "confirmCommit"].map(val => (
                  <Button
                    type="main"
                    size="small"
                    onPress={() => setDeviceActionStep(val)}
                    mr={3}
                  >
                    {val}
                  </Button>
                ))}
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
    </ImageSourceContext.Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 16,
  },
});
