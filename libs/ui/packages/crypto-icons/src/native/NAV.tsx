import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#7D59B5";

function NAV({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path fillRule="evenodd" clipRule="evenodd" d="M15.99 16.5h-3.597l-2.849-5.254L7.348 16.5H3.75l3.763-9h3.598l2.959 5.457L16.652 7.5h3.598l-4.26 9z"  /></Svg>;
}

NAV.DefaultColor = DefaultColor;
export default NAV;