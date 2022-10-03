import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#000";

function EGLD({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path fillRule="evenodd" clipRule="evenodd" d="M9.174 7.41c.855-.558 1.79-.82 2.826-.836 1.018 0 1.955.278 2.825.836l1.807-1.803C15.22 4.54 13.692 4 12 4c-1.692 0-3.236.541-4.616 1.607l1.79 1.803zm7.639-.23a.288.288 0 01-.099-.213c0-.082.033-.147.099-.213a.35.35 0 01.46 0 .288.288 0 01.098.213.288.288 0 01-.098.213.393.393 0 01-.23.082c-.082.017-.165-.016-.23-.082zm-.805.853a.345.345 0 01-.082-.213c0-.082.033-.148.082-.213a.308.308 0 01.427 0c.05.065.082.13.082.213a.345.345 0 01-.082.213.346.346 0 01-.213.082.347.347 0 01-.214-.082zm-.953.623c0 .082.033.164.082.213.05.049.132.082.214.082a.272.272 0 00.213-.082.345.345 0 00.082-.213.311.311 0 00-.082-.213.308.308 0 00-.427 0 .345.345 0 00-.082.213zM14.3 9.705a.264.264 0 01-.099-.213c0-.082.033-.148.099-.214a.35.35 0 01.46 0c.065.05.098.132.098.214a.264.264 0 01-.099.213.308.308 0 01-.23.082.308.308 0 01-.23-.082zm-.888.623c0 .082.017.163.083.213.049.065.131.098.213.082.082 0 .164-.017.214-.082a.311.311 0 00.082-.213c0-.082-.017-.164-.082-.214a.308.308 0 00-.427 0 .345.345 0 00-.082.213zm-.887.836c0-.082.033-.148.083-.213a.308.308 0 01.427 0 .271.271 0 01.082.213.344.344 0 01-.082.213.313.313 0 01-.214.082.346.346 0 01-.213-.082.311.311 0 01-.083-.213zm-1.642 1.64c0 .081.033.163.082.212.066.066.131.098.213.082.083 0 .165-.016.214-.082a.345.345 0 00.082-.213.271.271 0 00-.082-.213.308.308 0 00-.427 0 .344.344 0 00-.082.213zm-.789 1.048a.264.264 0 01-.098-.213c0-.082.033-.147.098-.213a.35.35 0 01.46 0 .288.288 0 01.099.213.288.288 0 01-.099.213.308.308 0 01-.23.082c-.082.017-.164-.016-.23-.082zm-.887.64c0 .081.033.163.082.213.066.049.132.082.214.082a.273.273 0 00.214-.082.345.345 0 00.082-.213.311.311 0 00-.082-.214.308.308 0 00-.428 0 .311.311 0 00-.082.214zm-.755 1.049c-.066-.05-.082-.132-.082-.213 0-.082.032-.148.082-.214a.308.308 0 01.427 0c.049.066.082.131.082.213a.311.311 0 01-.082.214.272.272 0 01-.214.082c-.082 0-.164-.017-.213-.082zm-.97.623c0 .082.033.164.1.213.048.066.13.082.213.082a.393.393 0 00.23-.082.264.264 0 00.098-.213.288.288 0 00-.098-.213c-.115-.115-.313-.115-.444 0a.288.288 0 00-.099.213zm-.722 1.049A.271.271 0 016.678 17c0-.082.032-.148.082-.213a.308.308 0 01.427 0 .271.271 0 01.082.213.345.345 0 01-.082.213.313.313 0 01-.214.082c-.066.016-.148-.017-.213-.082zm.509-10.246a.345.345 0 01-.082.213.214.214 0 01-.214.082.313.313 0 01-.213-.082.345.345 0 01-.082-.213c0-.082.016-.147.082-.213a.308.308 0 01.427 0c.049.066.082.131.082.213zm.756 1.066a.288.288 0 00.098-.213.288.288 0 00-.098-.213.35.35 0 00-.46 0 .288.288 0 00-.099.213c0 .082.033.147.099.213.065.049.147.082.23.082a.393.393 0 00.23-.082zm.936.623a.311.311 0 01-.082.213.387.387 0 01-.214.082.272.272 0 01-.213-.082.345.345 0 01-.082-.213c0-.082.032-.164.082-.213a.308.308 0 01.427 0c.049.065.082.13.082.213zm.756 1.049a.311.311 0 00.082-.213.345.345 0 00-.082-.214.308.308 0 00-.428 0 .311.311 0 00-.082.214c0 .082.033.163.082.213a.272.272 0 00.214.082.295.295 0 00.214-.082zm.92.623a.264.264 0 01-.1.213.214.214 0 01-.213.082.308.308 0 01-.23-.082.264.264 0 01-.098-.213c0-.082.033-.164.098-.214a.329.329 0 01.444 0 .288.288 0 01.098.213zm.837.836a.345.345 0 00-.082-.213.308.308 0 00-.427 0 .271.271 0 00-.082.213c0 .082.033.148.082.213.05.05.131.082.213.082a.346.346 0 00.214-.082c.066-.05.082-.131.082-.213zm.838.853a.271.271 0 01-.082.213.313.313 0 01-.214.082.313.313 0 01-.213-.082.345.345 0 01-.082-.213c0-.082.016-.148.082-.214a.308.308 0 01.427 0c.05.066.082.131.082.213zm.756 1a.264.264 0 00.098-.214.288.288 0 00-.098-.213c-.132-.115-.329-.115-.444 0a.288.288 0 00-.099.213c0 .082.033.148.099.213a.308.308 0 00.23.082c.066.016.148-.016.214-.082zm.936.622a.311.311 0 01-.082.213c-.066.066-.148.098-.214.082a.272.272 0 01-.213-.082.344.344 0 01-.082-.213c0-.082.032-.147.082-.213a.308.308 0 01.427 0c.049.066.082.131.082.213zm.755 1.066a.311.311 0 00.083-.213.311.311 0 00-.083-.214.308.308 0 00-.427 0 .311.311 0 00-.082.214c0 .081.033.147.082.213a.272.272 0 00.214.082.347.347 0 00.213-.082zm.871.623c0 .082-.016.163-.082.213-.05.065-.131.082-.213.082a.272.272 0 01-.214-.082.311.311 0 01-.082-.213c0-.082.033-.148.082-.214a.308.308 0 01.427 0c.05.066.082.131.082.213zm.805 1.049c.066-.05.082-.131.082-.213a.345.345 0 00-.082-.213.308.308 0 00-.427 0 .271.271 0 00-.082.213c0 .082.033.164.082.213.05.05.131.082.213.082.083 0 .165-.016.214-.082zm.936.623a.288.288 0 01-.098.213c-.066.066-.148.098-.214.082a.393.393 0 01-.23-.082.289.289 0 01-.098-.213c0-.082.033-.148.098-.213.115-.115.312-.115.444 0a.288.288 0 01.098.213zM6.513 12c0 1 .28 1.934.854 2.803l-1.774 1.82C4.526 15.229 4 13.688 4 12.016c0-1.705.526-3.23 1.577-4.606l1.79 1.787A4.9 4.9 0 006.513 12zm8.312 4.59a5.085 5.085 0 01-2.809.885c-1.035 0-1.987-.279-2.842-.869l-1.807 1.787c1.397 1.082 2.94 1.623 4.65 1.607 1.691-.017 3.219-.558 4.599-1.607l-1.79-1.803zm2.612-4.558c.016-1.032-.28-1.983-.854-2.852l1.807-1.82C19.474 8.754 20.016 10.295 20 12c0 1.672-.542 3.196-1.61 4.573l-1.807-1.787a5 5 0 00.854-2.754zm1.035 5.116c.69 0 1.265.557 1.265 1.262a1.264 1.264 0 01-2.53 0c0-.705.559-1.262 1.265-1.262zM6.809 18.41a1.25 1.25 0 00-1.248-1.262 1.25 1.25 0 00-1.249 1.262 1.25 1.25 0 001.249 1.262 1.26 1.26 0 001.248-1.262zm11.68-14.131c.69 0 1.248.557 1.248 1.262a1.25 1.25 0 01-1.249 1.262 1.25 1.25 0 01-1.248-1.262 1.25 1.25 0 011.248-1.262zM6.808 5.525a1.26 1.26 0 00-1.265-1.246A1.25 1.25 0 004.28 5.525 1.26 1.26 0 005.544 6.77 1.25 1.25 0 006.81 5.525z"  /></Svg>;
}

EGLD.DefaultColor = DefaultColor;
export default EGLD;