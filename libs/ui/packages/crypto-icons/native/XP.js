import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
const DefaultColor = "#008200";
function XP({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M11.092 17.25H9.744l-.812-3.188 1.984-1.036.646 1.845.48-2.434 2.637-1.377-.146.731 1.523.015c.588-.01 1.043-.208 1.367-.595.324-.388.478-.908.462-1.562a1.736 1.736 0 00-.027-.251l2.048-1.07c.283.52.391 1.135.325 1.84-.11 1.03-.555 1.853-1.334 2.47-.78.618-1.773.927-2.98.927l-1.73-.007-.732 3.692h-2.363zm.316-8.242h1.313l-2.023 2.868-4.995 2.611 1.851-2.617-1.779-5.12h2.61l.922 3.592.79-1.335h1.312-1.313l1.409-2.257h1.661l3.845.008c.873.024 1.59.255 2.15.695l-2.1 1.098a1.332 1.332 0 00-.157-.02l-1.72-.015-.225 1.133-2.638 1.378.399-2.02h-1.312zM4.34 16.463l3.995-2.089-1.761 2.875H3.75l.575-.814.014.028z" }));
}
XP.DefaultColor = DefaultColor;
export default XP;
