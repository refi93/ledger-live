import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#1A1F36";

function TOMO({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M13.75 10.573a.411.411 0 00.037-.82h-2.88v-.72a.476.476 0 00-.915 0v.72h-.77a.41.41 0 000 .82h.77v2.505a2.39 2.39 0 002.383 2.376 2.333 2.333 0 001.44-.525l.173-.144a.483.483 0 10-.633-.72l-.13.108a1.382 1.382 0 01-1.498.172 1.44 1.44 0 01-.82-1.296v-2.476h2.844zm4.68 2.793a.36.36 0 00-.28-.425h-.18a.352.352 0 00-.345.274 5.616 5.616 0 11-10.6-3.55 5.134 5.134 0 012.78-2.779 5.66 5.66 0 016.998 2.002.36.36 0 00.49.1l.065-.043a.388.388 0 00.123-.532 6.48 6.48 0 00-7.596-2.44A6.077 6.077 0 006.14 9.664a6.436 6.436 0 1012.29 3.701zm-5.917-9.929h-.72a8.582 8.582 0 00-7.878 10.98.41.41 0 00.511.274h.058a.41.41 0 00.216-.482 7.762 7.762 0 115.76 5.4.389.389 0 00-.39.144.419.419 0 00.238.67 8.575 8.575 0 102.205-16.986z"  /></Svg>;
}

TOMO.DefaultColor = DefaultColor;
export default TOMO;