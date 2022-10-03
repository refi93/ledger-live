import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#F70808";

function CDN({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 4.5l-1.245 2.262c-.14.246-.393.224-.647.086l-.9-.455.67 3.475c.142.635-.31.635-.534.36L7.77 8.512l-.255.872c-.03.115-.159.235-.353.206l-1.987-.408.52 1.851c.113.412.2.582-.112.69l-.708.326 3.422 2.709a.431.431 0 01.156.454l-.3.958c1.179-.133 2.235-.332 3.414-.455.104-.01.278.157.277.275l-.155 3.51h.573l-.09-3.502c0-.118.158-.293.261-.282 1.18.123 2.235.322 3.413.454l-.299-.959a.43.43 0 01.156-.453l3.422-2.71-.708-.324c-.312-.109-.225-.279-.113-.69l.522-1.852-1.988.408c-.194.029-.324-.091-.353-.206l-.255-.872-1.573 1.716c-.224.275-.677.275-.535-.36l.671-3.475-.9.455c-.254.138-.507.16-.648-.086L12 4.5z"  /></Svg>;
}

CDN.DefaultColor = DefaultColor;
export default CDN;