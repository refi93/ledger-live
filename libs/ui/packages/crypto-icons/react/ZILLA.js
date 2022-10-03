import * as React from "react";
import Svg from "./StyledSvg";
const DefaultColor = "#00004D";
function ZILLA({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M11.629 4.481a29.025 29.025 0 00-.37 1.833c-.038.254-.196.592.244.774-.1.02-.131.032-.163.026-.313-.04-.634-.084-.947-.123-.07-.007-.157-.02-.22.012A.914.914 0 009.778 8.2c.12.253.157.487.107.754a.374.374 0 00.038.201c.244.599.288 1.196.093 1.82-.031.098-.012.216-.006.319.013.202.025.403.044.604-.308-.246-.645-.467-.903-.767a1.495 1.495 0 01-.351-1.098c.006-.078-.056-.17-.107-.24-.144-.215-.313-.41-.432-.638-.17-.325-.377-.461-.716-.357-.169.052-.326.162-.47.273-.125.09-.233.208-.345.312-.013-.013-.032-.026-.044-.039.02-.046.025-.097.05-.143.176-.325.17-.319-.074-.592-.471-.526-.88-1.092-1.055-1.807-.088-.357-.195-.71-.288-1.06-.47.585-.533 2.692-.069 3.524-.145-.735-.289-1.43-.126-2.146.032.163.05.319.057.482a4.19 4.19 0 00.407 1.638c.05.11.195.175.302.253.037.027.088.04.131.059-.006.026-.006.052-.013.071-.231-.013-.457-.039-.69-.045-.15-.007-.325-.046-.444.02-.158.084-.283.247-.37.409-.026.045.1.227.194.3.25.188.42.395.383.746-.007.085.087.235.17.267.224.085.287.254.325.468.025.137.044.312.132.39.282.26.37.572.376.95.006.24.131.487.1.721-.025.202.013.351.094.468h-.006l.02.02c.05.078.118.142.2.202l.163.155s.282.306.288.605c.007.3-.019.338.069.604.088.26.207.469.245.69.038.221-.044.285.088.429.131.142.276.24.426.403.145.17.352.227.49.37s.357.41.526.58c.088.09.207.162.295.213.025.027.037.04.031.053-.119.26.126.254.22.338.163.143.395.233.514.409.214.319.49.482.835.58.031.006.069.012.08.031.045.053.076.117.114.176-.013.02-.032.039-.044.058.345.124.69.254 1.035.37a.368.368 0 00.22.008c.288-.097.577-.202.865-.306.056-.02.144-.078.138-.104-.044-.208.125-.175.22-.227.225-.124.489-.215.658-.39.207-.221.395-.45.671-.599.113-.065.339-.09.225-.337-.006-.014.057-.065.089-.098.043-.04.094-.072.157-.123.043-.02.093-.053.175-.111.255-.21.492-.44.709-.69.15-.188.395-.422.395-.422s-.157-.37-.056-.696l.532-.396c.114-.24.145-.332.27-.579.12-.247.15-.721.32-.91.15-.162.333-.293.326-.396a.745.745 0 00.038-.345c-.018-.17.037-.345.057-.514.012-.143 0-.286.037-.423.063-.22.107-.48.245-.637.15-.169.25-.318.27-.546.018-.195.093-.351.288-.443a.407.407 0 00.188-.305c-.006-.292.088-.5.326-.656.07-.045.12-.124.188-.176.113-.084.095-.182.032-.292-.163-.292-.408-.397-.734-.337-.245.045-.615.07-.747.07-.13 0-.037-.097-.037-.097.464-.013.52-.396.627-.708.088-.26.138-.534.182-.807.044-.26.044-.384.094-.787s.17.78-.019 1.75c.377-.573.257-2.647-.163-3.258-.012.013-.025.02-.025.033-.019.078-.03.156-.05.234-.182.994-.558 1.885-1.254 2.613-.258.267-.245.273-.07.618.02.033.02.078.025.123-.15-.07-.262-.175-.375-.273a1.02 1.02 0 00-.747-.285c-.3 0-.383.22-.47.435-.163.39-.546.63-.559 1.15-.018.761-.696 1.144-1.135 1.651-.006.008-.025-.006-.05-.006-.006-.026-.025-.058-.02-.084 0-.468.127-.943-.08-1.392-.013-.026-.007-.065 0-.09.08-.657.157-1.307.244-1.958.012-.084.057-.162.094-.24.22-.468.056-1-.388-1.235a.324.324 0 00-.176-.026c-.245.032-.483.078-.721.11-.12.02-.245.02-.364.026-.007-.02-.013-.039-.019-.052.2-.065.3-.188.257-.409l-.452-2.25c-.012-.058-.025-.351.044-.2.07.155.29.824.414 1.247.12.41.213.833.32 1.248-.176-1.163-.445-2.295-1.11-3.328-.177.221-.319.47-.42.735a32.8 32.8 0 00-.452 1.43c-.106.37-.382 1.099-.263 1.117.119.02.702-2.164.74-2.32.037-.156.107-.15.037.142v.001z" }));
}
ZILLA.DefaultColor = DefaultColor;
export default ZILLA;
