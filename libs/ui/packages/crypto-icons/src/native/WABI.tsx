import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};
const DefaultColor = "#399B32";

function WABI({
  size = 16,
  color = DefaultColor
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M16.417 5.6c-.08.326-.066.743.024.78.09.039.316-.176.449-.42.127-.226.24-.293.397-.235.208.081.175.153-.25.521-.355.307-.426.417-.33.513.055.057.097.048.3-.063.256-.133.398-.124.398.03 0 .07-.094.129-.44.262-.245.096-.487.22-.543.283-.113.124-.312.517-.548 1.096-.204.503-.398.872-.525 1.015-.105.115-.454.188-1.191.245-.345.028-.388.024-.407-.058a7.26 7.26 0 01-.127-.675c0-.014.174-.01.392.005.388.029.775.134.955.258.137.096.151.082.213-.187.075-.306.236-.708.481-1.206.185-.369.19-.397.17-.747-.023-.387-.09-.555-.32-.809-.086-.09-.138-.191-.124-.23a.566.566 0 00.029-.09c0-.01.042-.02.09-.02.056 0 .155.087.245.216.25.354.326.287.326-.302 0-.268.02-.382.08-.45.095-.105.17-.11.251-.014.047.058.047.12.005.283zM12.66 7.607c.033.355.1.479.312.555.085.034.203.083.26.101.137.057.175.263.321 1.604.156 1.455.19 1.661.336 2.111.222.684.203 1.48-.057 2.279-.132.411-.279.598-.58.76-.606.321-1.23.087-1.717-.641a2.364 2.364 0 01-.369-1.805c.071-.335.109-.842.075-.967-.013-.062-.165-.253-.335-.435-.53-.55-1.088-1.537-.978-1.714.033-.048.056-.196.056-.325 0-.264-.075-.37-.406-.555-.218-.125-.232-.25-.052-.594.099-.201.156-.244.652-.498.506-.258.733-.33 1.485-.465.312-.057.538-.052.708.02.2.086.255.196.29.57zM8.187 9.392c0 .244.08.484.137.421.024-.024.075-.158.123-.297.075-.24.213-.382.308-.32.08.052.051.33-.053.502-.142.235-.142.68.005.977.147.287.449.603.582.603.08-.005.174-.12.435-.565l.33-.56.052.335c.053.378.029.493-.184.862-.237.416-.501.742-.6.742-.114 0-.37-.254-.587-.58-.085-.134-.32-.392-.52-.579l-.363-.34-.222.039a2.61 2.61 0 01-.412.043c-.17.005-.19-.005-.203-.124-.015-.105.01-.14.108-.163.108-.02.218-.02.327-.005.132.02.231.01.283-.029.08-.058.076-.067-.004-.163-.048-.057-.19-.134-.322-.177-.33-.105-.544-.249-.544-.359 0-.143.18-.177.326-.058.488.403.624.46.753.33.09-.09.066-.262-.086-.564-.132-.268-.18-.517-.109-.588.048-.053.17-.039.255.028.1.081.185.345.185.589zm8.646 4.312c-.118.126-.458.523-.756.882-.88 1.062-.97 1.177-.932 1.216.038.038.785-.292.955-.421.213-.168.6-.58.671-.719a1.99 1.99 0 00.114-.388c.057-.287.213-.507.354-.507.095 0 .138.11.1.254a2.862 2.862 0 01-.236.465c-.119.196-.199.373-.19.392.047.071.223.038.426-.082.118-.067.288-.243.416-.426.25-.354.42-.507.572-.507.127 0 .279.163.246.258-.015.039-.233.225-.478.413-.425.32-.558.487-.482.612.043.072.435-.024.851-.21.709-.321.903-.34 1.016-.125.095.177-.137.287-1.044.488-.25.058-.525.148-.61.2l-.156.097.109.09c.094.078.193.092.661.092.42 0 .578.019.648.071.09.072.085.078-.047.197-.086.072-.165.11-.213.09-.208-.086-.912-.215-1.168-.215-.458 0-.496.168-.08.33.189.078.26.164.222.264-.042.115-.156.096-.567-.096-.833-.387-.983-.407-1.98-.277-.473.062-.61.067-.662.019-.105-.087-.086-.168.061-.297.118-.1 1.03-1.8.988-1.838-.024-.024-.945.306-1.613.584-.084.033-.084.029 0-.105.313-.513 1.215-1.088 2.265-1.446.544-.187.577-.192.804-.187.151.01.194.03.203.105.015.12-.175.417-.468.727zm-10.84 1.692c.176.249.578.67.638.67.063 0 .01-.417-.103-.853-.104-.397-.113-.588-.033-.67.061-.062.27-.076.355-.019.033.02.07.293.099.704.052.752.09.89.273 1.01.119.082.128.082.185.005.028-.043.061-.22.067-.397.013-.474.127-.685.33-.618.156.048.17.244.052.618-.137.435-.16.751-.099 1.177.09.58.308 1.097.416.986.024-.018.037-.665.042-1.43.005-1.198.015-1.437.086-1.662.132-.412.16-.431.68-.431.856 0 2.444.23 2.657.382.227.164.18.222-.27.365-.978.301-1.455.36-2.046.244-.194-.039-.37-.062-.388-.052-.019.009 0 .12.037.244.119.387.086.627-.193 1.479-.146.435-.284.943-.302 1.125-.02.182-.072.363-.1.402-.123.148-.26.081-.482-.23-.279-.382-.719-.804-.974-.938-.109-.058-.468-.163-.794-.24-.586-.134-.775-.225-.704-.34.024-.043.127-.047.354-.028.416.043.45-.015.17-.278a3.529 3.529 0 00-1.03-.637c-.355-.143-.416-.19-.416-.306 0-.091.132-.187.26-.187.042 0 .232.13.416.292.387.33.657.489.804.465.27-.039-.053-.666-.558-1.087-.185-.153-.364-.34-.402-.412-.062-.12-.062-.133.024-.196a.439.439 0 01.26-.057c.146.015.18.043.354.35.104.186.255.434.336.55zm6.78-8.22c.24-.038.292.158.292.153.128.33.052.743.052.743-.17-.034-.297-.245-.297-.245-.1-.234-.048-.65-.048-.65v-.001zM9.363 8.54s.364.2.501.416c0 0 .095.225.024.388 0 0-.378-.177-.567-.474 0 .005-.123-.153.042-.33z"  /></Svg>;
}

WABI.DefaultColor = DefaultColor;
export default WABI;