import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#0CAFA5";

function IOP({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M6.31 7.469c-.025-.015-.045-.003-.045.026v1.727a.1.1 0 00.045.078l2.183 1.262a.1.1 0 01.045.079v6.247a.101.101 0 00.046.079l1.495.862c.025.015.045.003.045-.026V9.726a.1.1 0 00-.045-.08L6.31 7.47zm11.38 0c.025-.015.046-.003.046.026v1.727a.1.1 0 01-.045.078l-2.183 1.26a.1.1 0 00-.045.08v6.247a.101.101 0 01-.046.08l-1.494.862c-.026.015-.046.003-.046-.026V9.726a.1.1 0 01.045-.08L17.69 7.47z"  /><Path d="M17.985 4.157c0-.029-.02-.04-.045-.026L12.045 7.54a.1.1 0 01-.09 0L6.06 4.13c-.025-.014-.045-.002-.045.027v1.726a.1.1 0 00.045.079l5.103 2.95a.101.101 0 01.045.08v10.713a.101.101 0 00.045.08l.702.404a.103.103 0 00.091 0l.701-.404a.101.101 0 00.045-.08V8.992a.101.101 0 01.046-.079l5.102-2.951a.102.102 0 00.045-.08V4.158zm-5.958 4.362c-.006 0-.008-.005-.005-.01s.008-.005.01 0c.004.005 0 .01-.005.01z"  /><Path d="M11.26 3.931a.066.066 0 00-.052.063V6.15a.101.101 0 00.046.079l.7.405a.099.099 0 00.092 0l.702-.405a.101.101 0 00.045-.08V3.994a.065.065 0 00-.051-.063l-.69-.126a.343.343 0 00-.103 0l-.69.127z"  /></Svg>;
}

IOP.DefaultColor = DefaultColor;
export default IOP;