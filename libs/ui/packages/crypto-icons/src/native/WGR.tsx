import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#B80000";

function WGR({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M19.42 7.79c.117.199.1.407-.015.611-.174.278-.335.56-.5.84l-1.366 2.331c-.91 1.546-1.82 3.092-2.733 4.637a.554.554 0 01-.533.29.573.573 0 01-.502-.323c-.112-.2-.228-.396-.345-.594l-1.15-1.958c-.086-.148-.173-.293-.272-.456-.096.163-.186.308-.272.456l-1.15 1.957c-.117.197-.232.395-.345.595a.572.572 0 01-.502.323.56.56 0 01-.533-.29c-.433-.729-.86-1.457-1.29-2.188-.483-.816-.964-1.632-1.443-2.449L5.104 9.241c-.165-.28-.329-.562-.5-.84-.124-.204-.142-.412-.026-.611.114-.196.298-.29.534-.29 1.476.005 2.953.015 4.429.002.372-.002.595.14.77.45.372.666.769 1.315 1.152 1.972.16.278.319.558.481.835.013.02.034.036.053.053a.205.205 0 00.05-.052c.162-.278.32-.558.483-.836.386-.657.78-1.31 1.153-1.971.173-.311.396-.453.769-.45 1.476.012 2.952.002 4.43-.003.24 0 .424.094.538.29zm-8.133 4.316a.234.234 0 00.003-.196c-.075-.153-.174-.297-.262-.448-.528-.902-1.057-1.8-1.583-2.704-.054-.092-.116-.125-.225-.125-.984.005-1.968.005-2.952.007-.047 0-.093.008-.16.013l3.597 6.14c.103-.173.191-.311.274-.454.44-.742.876-1.487 1.308-2.233zm3.008 2.687c1.204-2.055 2.395-4.09 3.6-6.14-.07-.005-.114-.013-.16-.013-.985-.002-1.97-.002-2.953-.007-.11 0-.171.033-.225.124l-1.583 2.705c-.088.148-.184.292-.262.448a.234.234 0 000 .196c.435.745.87 1.49 1.308 2.233.083.143.171.283.275.454z"  /></Svg>;
}

WGR.DefaultColor = DefaultColor;
export default WGR;