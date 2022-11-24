import AnimatedLottieView from "lottie-react-native";
import React, { useContext } from "react";
import FramedImage, {
  transferLottieConfig,
  Props as FramedImageProps,
  ImageSourceContext,
} from "./FramedImage";

const lottiesStyle = {
  width: transferLottieConfig.frameWidth,
  transform: [{ scale: (1182 / 502) ** (1 / 2) }], // (width of the lottie bounding box / width of the device frame in the lottie) ** (1 / 2)
};

type Props = {
  lottieSource: React.ComponentProps<typeof AnimatedLottieView>["source"];
  source?: FramedImageProps["source"];
  loadingProgress?: FramedImageProps["loadingProgress"];
};

const FramedImageWithLottie: React.FC<Props> = ({
  source,
  lottieSource,
  loadingProgress,
}) => {
  return (
    <FramedImage
      frameConfig={transferLottieConfig}
      source={source}
      loadingProgress={loadingProgress}
      background={
        <AnimatedLottieView
          autoPlay
          loop
          style={lottiesStyle}
          source={lottieSource}
        />
      }
    />
  );
};

export default FramedImageWithLottie;

export const FramedImageWithLottieWithContext: React.FC<
  Omit<Props, "source">
> = props => {
  const { source } = useContext(ImageSourceContext);
  return <FramedImageWithLottie {...props} source={source} />;
};
