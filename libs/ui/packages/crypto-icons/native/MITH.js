import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
const DefaultColor = "#00316D";
function MITH({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M13.617 16.04c-.01-.018-.011-.025-.015-.028-.465-.22-.93-.44-1.397-.657-.024-.012-.075-.009-.09.009-.203.217-.4.44-.602.663.146.107 1.982.108 2.104.013zM9.36 10.668l-.046-.098c-.04.028-.09.048-.116.086-.43.64-.856 1.28-1.28 1.923-.027.04-.025.1-.038.15.052-.01.11-.008.154-.035.364-.219.725-.443 1.083-.673a.298.298 0 00.12-.187c.048-.375.081-.752.123-1.166zm8.998 5.437h.62c.119 0 .165-.045.089-.16-.394-.6-.786-1.203-1.181-1.802-.021-.033-.07-.048-.105-.07-.02.037-.051.075-.055.115-.046.586-.087 1.173-.132 1.76-.008.11.03.161.145.159.206-.005.412-.002.62-.002zm-13.3-.045c.094.023.14.044.186.045l2.009.001c.13 0 .163-.046.108-.17a80.88 80.88 0 01-.617-1.436c-.058-.14-.112-.134-.204-.035-.357.386-.717.767-1.076 1.15l-.406.445zm9.896-3.46c.043.085.058.122.08.154l.905 1.315c.375.544.748 1.088 1.125 1.63.026.037.075.057.113.085.02-.045.05-.088.057-.135.015-.127.018-.255.026-.382.04-.581.086-1.162.12-1.742.015-.248-.092-.375-.327-.434l-1.88-.47c-.056-.013-.115-.01-.22-.02zm-.16-3.85l-.056.01c-.008.114-.019.23-.023.346l-.083 2.828c-.004.103.027.157.134.183.65.157 1.298.323 1.947.483.057.013.119 0 .178 0-.015-.058-.018-.123-.046-.174A1607.55 1607.55 0 0014.9 8.895c-.028-.052-.069-.098-.104-.146zm-2.913 5.78c.018-.1.035-.16.038-.22.01-.314.01-.629.024-.943a1.023 1.023 0 00-.2-.668c-.596-.826-1.19-1.654-1.782-2.483-.027-.037-.038-.086-.057-.13l-.07.043c-.018.063-.045.125-.051.189-.053.51-.098 1.02-.154 1.528a.345.345 0 00.095.297c.671.748 1.338 1.5 2.008 2.25.036.04.08.074.15.137zm.433-.157l.045.03c.041-.032.09-.058.123-.098.57-.692 1.138-1.386 1.705-2.082a.275.275 0 00.058-.153c.027-.927.05-1.853.071-2.78.002-.05-.027-.102-.043-.153-.041.04-.1.072-.122.12-.525 1.112-1.027 2.234-1.578 3.332-.29.58-.244 1.18-.26 1.785v-.001zm-2.627 1.733c.36 0 .722.005 1.083-.004a.345.345 0 00.22-.094c.251-.263.487-.542.737-.806.094-.098.073-.158-.006-.245-.424-.459-.843-.921-1.259-1.387-.1-.113-.158-.112-.248.01-.57.782-1.148 1.557-1.721 2.336-.029.04-.04.091-.059.137.05.018.1.05.152.05.367.005.733.003 1.1.003zm.373-2.974c-.2-.232-.395-.45-.58-.68-.078-.094-.138-.104-.243-.039-.627.395-1.261.779-1.887 1.175-.113.072-.202.184-.298.282-.09.092-.077.192-.029.305.244.557.482 1.117.723 1.675.091.21.126.214.266.027.371-.495.74-.993 1.11-1.488l.938-1.257zm4.346-.591c-.048.078-.072.126-.105.165-.594.725-1.188 1.45-1.787 2.17-.097.119-.047.165.063.215.688.315 1.373.636 2.062.95.088.039.184.06.28.062.567.005 1.135.004 1.703 0 .052 0 .106-.023.159-.037-.019-.055-.027-.119-.06-.166a697.655 697.655 0 00-1.574-2.29l-.74-1.07zm-2.412 4.332c-2.582 0-5.163 0-7.745.002-.2 0-.382-.023-.47-.239-.082-.204.014-.356.148-.5.771-.823 1.553-1.637 2.303-2.479.286-.32.508-.702.75-1.063.776-1.161 1.546-2.327 2.326-3.485a.725.725 0 01.317-.273c.17-.063.314.035.422.19.628.896 1.26 1.79 1.89 2.686.13.183.177.177.273-.032l1.946-4.237c.076-.167.177-.308.375-.317.206-.01.331.115.428.292.976 1.772 1.93 3.558 2.945 5.307.614 1.058 1.324 2.056 1.99 3.081.083.126.166.251.247.379.098.154.156.322.064.493-.09.165-.256.196-.431.196h-7.778z" }));
}
MITH.DefaultColor = DefaultColor;
export default MITH;
