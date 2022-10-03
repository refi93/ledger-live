import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
const DefaultColor = "#1D1D1D";
function BQ({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M7.471 11.966a2.887 2.887 0 002.902 2.886c1.592-.01 2.885-1.287 2.886-2.85A2.875 2.875 0 0010.364 9.1c-1.599.002-2.894 1.284-2.894 2.866zm.003 3.104v.955H6V5.25c.42.008.773.157 1.058.454.272.285.407.626.406 1.022-.004.71-.002 1.42-.002 2.164 1.03-.86 2.177-1.284 3.513-1.08 1.324.203 2.34.869 3.033 2.008 1.046 1.722.707 3.92-.809 5.288-1.478 1.335-3.934 1.542-5.724-.036zm4.77.936c.058-.036.089-.056.121-.073a4.285 4.285 0 001.238-.916.396.396 0 01.285-.135c1.252-.072 2.381-1.08 2.593-2.313.28-1.62-.705-3.05-2.332-3.36a.962.962 0 01-.578-.315c-.3-.331-.664-.59-1.052-.813-.033-.018-.065-.039-.119-.072.739-.202 1.458-.25 2.187-.085.725.165 1.35.52 1.935 1.006v-.957H18V18.75a1.47 1.47 0 01-1.05-.451 1.425 1.425 0 01-.415-1.032v-2.153c-1.273 1.067-2.682 1.387-4.291.892z" }));
}
BQ.DefaultColor = DefaultColor;
export default BQ;
