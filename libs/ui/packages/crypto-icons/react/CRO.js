import * as React from "react";
import Svg from "./StyledSvg";
const DefaultColor = "#002D74";
function CRO({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 2L3.5 7.011v9.978L12 22l8.5-5.011V7.01L12 2zm5.99 13.512L12 19.002l-5.99-3.49V8.488L12 4.953l5.99 3.535v7.024z" }),
        React.createElement("path", { d: "M12 4.953V2L3.5 7.011v9.978L12 22v-2.998l-5.99-3.49V8.488L12 4.953zM12 19.002v2.953l8.5-5.01V7.01L12 2v2.953l5.99 3.49v7.025L12 19.002z" }),
        React.createElement("path", { d: "M16.008 14.304L12 16.63l-3.963-2.327V9.65L12 7.324l4.008 2.327v4.653z" }));
}
CRO.DefaultColor = DefaultColor;
export default CRO;
