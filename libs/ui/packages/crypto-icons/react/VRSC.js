import * as React from "react";
import Svg from "./StyledSvg";
const DefaultColor = "#FFB500";
function VRSC({ size = 16, color = DefaultColor }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M20.923 10.896a9.002 9.002 0 00-2.085-4.734A8.895 8.895 0 0015.94 3.92a8.988 8.988 0 00-12.823 9.476 8.967 8.967 0 002.227 4.65c1.684 1.876 4.193 2.973 6.714 2.944a8.99 8.99 0 008.865-10.094zm-2.74-1.942a1.137 1.137 0 00-.107.182l-3.958 8.338c-.19.399-.38.802-.597 1.186-.98-.008-1.96-.004-2.941-.004-1.562-3.216-3.117-6.435-4.683-9.647-.032-.063-.065-.129-.098-.191.025-.018.084-.051.11-.066.61-.76 1.23-1.518 1.843-2.28.077-.097.165-.193.252-.28.041.065.08.13.114.204.34.783.687 1.57 1.035 2.352.352 0 .702.008 1.057-.015.128.122.198.283.25.447a1.62 1.62 0 00.098-.53c.114-1.05.132-2.111.245-3.161.018-.227.359-.227.388-.008.11.996.135 2.002.216 3 .015.3.026.6.092.893.15-.197.102-.545.376-.626.227-.076.483.052.7-.084.296-.179.405-.53.592-.804.106-.18.35-.308.549-.205.197.076.281.289.384.457.117.194.223.41.413.538.169.073.358.084.542.08.37-.834.75-1.665 1.127-2.495.658.827 1.28 1.68 1.939 2.507.099.043.117.117.062.212z" }),
        React.createElement("path", { d: "M13.555 7.907c-.297.322-.402.841-.846 1.006-.226.11-.5.018-.727.103-.198.388-.173.845-.323 1.247-.102.19-.41.095-.41-.113-.127-1.094-.138-2.199-.255-3.292-.124.984-.158 1.978-.311 2.955 0 .253-.4.293-.435.04-.077-.284-.095-.584-.239-.852a25.174 25.174 0 00-.742 0c.933 2.115 1.858 4.23 2.791 6.344.944-2.115 1.921-4.215 2.858-6.333l.003-.007c-.245-.03-.512-.055-.716-.209-.285-.237-.396-.618-.648-.89z" }));
}
VRSC.DefaultColor = DefaultColor;
export default VRSC;
