import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#20EE82";

function SC({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path fillRule="evenodd" clipRule="evenodd" d="M12 5.625A6.375 6.375 0 0118.375 12v6.375H12a6.375 6.375 0 110-12.75zm3.825 10.2v-3.767c0-2.115-1.691-3.873-3.805-3.883a3.83 3.83 0 00-3.845 3.845c.01 2.114 1.768 3.805 3.883 3.805h3.767z"  /></Svg>;
}

SC.DefaultColor = DefaultColor;
export default SC;