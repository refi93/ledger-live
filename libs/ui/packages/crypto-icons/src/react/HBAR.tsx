import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#000";

function HBAR({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M22 23h-3.124v-6.785H5.124V23H2V1h3.124v6.621h13.752V1H22v22zM5.272 13.677h13.751v-3.505H5.272v3.505z"  /></Svg>;
}

HBAR.DefaultColor = DefaultColor;
export default HBAR;