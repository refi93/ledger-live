import { Box, Flex, Text } from "@ledgerhq/native-ui";
// import { space } from "@ledgerhq/native-ui/styles/theme";
import React, { ComponentProps, useContext } from "react";
import { Image, ImageProps, StyleSheet } from "react-native";
import styled from "styled-components/native";
// import { targetDimensions } from "../../screens/CustomImage/shared";
import ForceTheme from "../theme/ForceTheme";
// import { scaleDimensions } from "./imageUtils";
import transferBackground from "./assets/transferBackground.png";
import previewBackground from "./assets/previewBackground.png";

const DEBUG = false;

type FrameConfig = {
  frameHeight: number;
  frameWidth: number;
  innerWidth: number;
  innerHeight: number;
  innerRight: number;
  innerTop: number;
  borderRightRadius: number;
  backgroundSource: number;
  resizeMode: ImageProps["resizeMode"];
};

type Props = Partial<ComponentProps<typeof Image>> & {
  /** source of the image inside */
  source?: ComponentProps<typeof Image>["source"];
  /** source of the background image */
  backgroundSource?: ComponentProps<typeof Image>["source"];
  /** text to display in the background placeholder */
  backgroundPlaceholderText?: string;
  /** float between 0 and 1 */
  loadingProgress?: number;
  children?: React.ReactNode | undefined;
  frameConfig: FrameConfig;
  scale?: number;
};

export const transferConfig: FrameConfig = {
  frameHeight: 222,
  frameWidth: 141,
  innerHeight: 210,
  innerWidth: 133,
  innerRight: 8,
  innerTop: 6,
  borderRightRadius: 5,
  backgroundSource: transferBackground,
  resizeMode: "cover",
};

export const previewConfig: FrameConfig = {
  frameHeight: 321.36,
  frameWidth: 204,
  innerWidth: 185,
  innerHeight: 303,
  innerRight: 8.2,
  innerTop: 8.7,
  borderRightRadius: 15.6,
  backgroundSource: previewBackground,
  resizeMode: "cover",
};

function scaleFrameConfig(
  frameConfig: FrameConfig,
  scale: number,
): FrameConfig {
  const { backgroundSource, resizeMode, ...rest } = frameConfig;
  return {
    backgroundSource,
    resizeMode,
    ...Object.fromEntries(
      Object.entries(rest).map(([key, value]) => {
        return [key, value * scale];
      }),
    ),
  } as FrameConfig;
}

const Container = styled(Box).attrs({})``;

const AbsoluteBackgroundContainer = styled(Flex).attrs({
  ...StyleSheet.absoluteFillObject,
  backgroundColor: DEBUG ? "blue" : undefined,
})``;

const AbsoluteInnerImageContainer = styled(Flex).attrs({
  position: "absolute",
  overflow: "hidden",
  flexDirection: "row-reverse",
  justifyContent: "flex-start",
})``;

const FramedImage: React.FC<Props> = ({
  source,
  backgroundPlaceholderText,
  loadingProgress = 1,
  children,
  frameConfig = transferConfig,
  scale,
  ...imageProps
}) => {
  const {
    frameHeight,
    frameWidth,
    innerWidth,
    innerHeight,
    innerRight,
    innerTop,
    borderRightRadius,
    backgroundSource,
    resizeMode,
  } = scaleFrameConfig(frameConfig, scale || 1);
  return (
    <Container height={frameHeight} width={frameWidth}>
      <ForceTheme selectedPalette="light">
        <AbsoluteBackgroundContainer height={frameHeight} width={frameWidth}>
          <Image
            source={backgroundSource}
            fadeDuration={0}
            resizeMode="contain"
            style={{
              height: frameHeight,
              width: frameWidth,
            }}
          />
        </AbsoluteBackgroundContainer>
        <AbsoluteInnerImageContainer
          style={{
            right: innerRight,
            top: innerTop,
            height: loadingProgress * innerHeight,
            width: innerWidth,
            backgroundColor: DEBUG ? "red" : undefined,
          }}
        >
          {!DEBUG && source ? (
            <Image
              {...imageProps}
              fadeDuration={0}
              resizeMode={resizeMode}
              source={source}
              style={{
                height: innerHeight,
                width: innerWidth,
                borderTopRightRadius: borderRightRadius,
                borderBottomRightRadius: borderRightRadius,
              }}
            />
          ) : null}
        </AbsoluteInnerImageContainer>
        <Flex style={{ height: innerHeight, width: innerWidth }}>
          {children}
        </Flex>
      </ForceTheme>
    </Container>
  );
};

export default FramedImage;

type SourceContext = {
  source?: React.ComponentProps<typeof Image>["source"];
};

const initialState = {
  source: undefined,
};

export const ImageSourceContext =
  React.createContext<SourceContext>(initialState);

export const FramedImageWithContext: React.FC<
  Omit<Props, "source">
> = props => {
  const { source } = useContext(ImageSourceContext);
  return <FramedImage {...props} source={source} />;
};
