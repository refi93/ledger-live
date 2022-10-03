import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
const DefaultColor = "#EFB914";
function GENERIC({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M15.751 7.391A5.96 5.96 0 0118 11.46l-2.135-.531a4.018 4.018 0 00-2.895-2.75c-2.15-.536-4.32.742-4.85 2.854-.528 2.111.788 4.256 2.939 4.79a4.03 4.03 0 003.85-1.072l2.135.53a5.98 5.98 0 01-3.9 2.54l-.607 2.43-1.947-.484.483-1.931a6.224 6.224 0 01-.974-.242l-.482 1.931-1.947-.485.608-2.43c-1.784-1.407-2.682-3.747-2.103-6.061.578-2.314 2.472-3.96 4.71-4.367l.607-2.431 1.947.484-.483 1.931c.33.054.656.135.974.242l.482-1.931 1.947.484-.608 2.431z" }));
}
GENERIC.DefaultColor = DefaultColor;
export default GENERIC;
