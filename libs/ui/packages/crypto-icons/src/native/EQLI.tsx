import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#C9A35E";

function EQLI({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M7.52 15.32a.279.279 0 01-.25.158H4.215a.276.276 0 01-.236-.137.278.278 0 01-.008-.279l5.553-10.01c.1-.179.387-.179.487 0l4.329 7.784a.296.296 0 01-.008.28.26.26 0 01-.236.135H12.83a.287.287 0 01-.243-.143L9.774 7.993 6.627 13.81H7.83a.286.286 0 01.236.128.283.283 0 01.014.272l-.558 1.109v.001zm12.506-.258a.263.263 0 01-.008.28.26.26 0 01-.235.135h-8.335a.279.279 0 01-.279-.279V14.09c0-.157.128-.279.28-.279h5.93l-3.14-5.796-.595 1.187c-.1.186-.407.186-.5 0l-.558-1.108a.306.306 0 010-.25l1.387-2.783a.293.293 0 01.243-.15.292.292 0 01.251.142l5.559 10.01zm-3.613 1.109l1.38 2.504a.277.277 0 010 .279.259.259 0 01-.235.136H6.44a.285.285 0 01-.243-.143.277.277 0 01.007-.28l2.225-3.612 2.217-3.885a.27.27 0 01.251-.143.262.262 0 01.244.15l.558 1.11a.268.268 0 01-.008.264l-2.818 4.865h6.253l-.58-.966a.264.264 0 01-.008-.28.285.285 0 01.244-.142h1.387c.101 0 .194.057.244.143z"  /></Svg>;
}

EQLI.DefaultColor = DefaultColor;
export default EQLI;