import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#DE3F6B";

function AE({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M7.314 8.25h.678c1.06.1 2.04.616 2.765 1.357 1.507 1.53 2.335 3.688 4.253 4.825 1.386.823 3.324.15 4.005-1.24.347-.006.696-.006 1.042-.005-.477 1.413-1.866 2.427-3.386 2.563h-.56c-.935-.075-1.845-.423-2.552-1.024-1.027-.843-1.687-1.999-2.486-3.028-.687-.91-1.388-1.932-2.524-2.346-1.405-.509-3.12.288-3.633 1.64-.45 1.115-.084 2.497.923 3.21.754.565 1.805.775 2.711.447 1.006-.351 1.753-1.149 2.326-1.995.226.313.446.63.664.95-.891 1.085-2.127 2.017-3.597 2.146H7.34c-1.852-.124-3.462-1.647-3.59-3.445v-.59C3.87 9.922 5.46 8.38 7.314 8.25zm8.76 0h.563c1.87.118 3.46 1.671 3.613 3.47v.922c-1.543.014-3.087.005-4.63.006.002-.27.002-.538 0-.808 1.22-.003 2.438.005 3.655-.003-.086-.477-.198-.965-.49-1.37-.713-1.052-2.22-1.483-3.424-1.027-.96.345-1.683 1.1-2.24 1.905-.215-.298-.428-.6-.634-.904.88-1.101 2.107-2.054 3.587-2.191z"  /></Svg>;
}

AE.DefaultColor = DefaultColor;
export default AE;