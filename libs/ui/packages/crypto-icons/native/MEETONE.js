import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
const DefaultColor = "#000";
function MEETONE({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M6.483 16.985l5.217 3.282h.631l5.133-3.282-.8-.63-4.67 2.987-4.838-2.987-.673.63zm2.524-7.614l2.946-4.46 3.029 4.502.715-.632-3.366-5.048s-.294-.379-.757 0l-3.45 5.175.883.463z", fillOpacity: 0.7 }),
        React.createElement(Path, { d: "M12.037 18.374c.167-.59.378-1.136.547-1.725.758-2.356 1.514-4.755 2.272-7.11.042-.126.084-.295.126-.42.084-.254.21-.38.463-.38a.458.458 0 01.462.379c.21.841.379 1.725.589 2.566.379 1.6.716 3.24 1.094 4.839.084.378-.042.631-.337.715-.294.084-.504-.126-.588-.505a208.81 208.81 0 01-1.22-5.47c0-.083-.043-.125-.085-.252a2.78 2.78 0 01-.126.337c-.799 2.44-1.556 4.88-2.356 7.32-.126.463-.295.884-.42 1.347-.085.294-.254.42-.505.42-.253 0-.421-.126-.505-.42-.926-2.903-1.852-5.806-2.735-8.71-.042-.083-.042-.125-.084-.294-.076.38-.16.76-.252 1.136-.338 1.515-.674 3.071-1.01 4.586-.085.42-.42.631-.758.42-.21-.126-.252-.336-.21-.588.463-2.104.967-4.208 1.43-6.31.084-.338.169-.674.21-1.011.085-.336.253-.505.506-.505.252 0 .42.169.504.505a778.84 778.84 0 012.862 9.13h.126z" }));
}
MEETONE.DefaultColor = DefaultColor;
export default MEETONE;
