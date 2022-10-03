import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#895AF8";

function TKS({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path fillRule="evenodd" clipRule="evenodd" d="M13.328 10.688c.12-.008.24-.008.36 0 1.11.074 1.62 1.582 2.324 1.5a6.12 6.12 0 01-2.25 1.162 1.5 1.5 0 01-1.627-.975v3l4.365-2.49V9l-3.172 1.688zm-2.168-.008a1.537 1.537 0 01-.555-1.117v-.06c0-.87 1.402-2.25 1.447-2.25.046.045 1.448 1.387 1.448 2.25v.067a1.5 1.5 0 01-.45 1.02l3.45-1.852L12 6.533 7.5 8.714l3.66 1.965zm.735 1.725a1.5 1.5 0 01-1.627.982 6.12 6.12 0 01-2.25-1.162c.704.053 1.207-1.463 2.324-1.5.12-.007.24-.007.36 0L7.5 9v3.893l4.402 2.542-.007-3.03z"  /><Path d="M12 3a9 9 0 100 18 9 9 0 000-18zM6.975 8.393L12 5.954l5.032 2.438v4.792L12 16.087l-5.025-2.902V8.392zm10.072 6.75l-5.01 2.895-5.07-2.925v-.278l5.07 2.925 5.01-2.895v.277zm0-.563l-5.01 2.895-5.07-2.925v-.3l5.07 2.933 5.01-2.896v.293zm0-.563l-5.01 2.896-5.07-2.925v-.278l5.07 2.932 5.01-2.894v.27z"  /></Svg>;
}

TKS.DefaultColor = DefaultColor;
export default TKS;