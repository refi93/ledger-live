import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
const DefaultColor = "#A71435";
function ARG({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M8.028 3.967a8.952 8.952 0 0110.736 13.89c-.446-.972-.788-1.991-1.17-2.995l-2.31-6.052c-.224-.614-.598-1.203-1.179-1.522a4.555 4.555 0 00-2.62-.407c-.717.08-1.466.327-1.952.893-.462.533-.669 1.219-.932 1.864l-1.665 4.22c-.557 1.339-1.027 2.725-1.632 4.055a8.267 8.267 0 01-1.872-3.306A8.96 8.96 0 018.036 3.96l-.008.007v.001z" }),
        React.createElement(Path, { d: "M11.357 10.068c.159-.478.796-.638 1.21-.367.223.168.303.454.407.71 1.035 2.707 2.055 5.43 3.082 8.147.136.39.334.765.415 1.17a.94.94 0 01-.224.176 8.976 8.976 0 01-7.375.494c-.446-.184-.907-.343-1.298-.622.04-.366.223-.693.358-1.027 1.147-2.89 2.27-5.79 3.425-8.681z" }));
}
ARG.DefaultColor = DefaultColor;
export default ARG;
