import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#24DD7B";

function TKN({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M10.569 5.935L13.871 4.5l-.027 3.79H18v2.625h-4.184v4.547c0 1.38 2.34 1.543 3.221 1.083l.798 2.382c-1.955 1.136-7.294.866-7.294-3.438V5.934h.028zm-3.083 5.683c-.82 0-1.486-.8-1.486-1.785 0-.987.665-1.787 1.487-1.787.82 0 1.485.8 1.485 1.787 0 .986-.665 1.785-1.485 1.785z"  /></Svg>;
}

TKN.DefaultColor = DefaultColor;
export default TKN;