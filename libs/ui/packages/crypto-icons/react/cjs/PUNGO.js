var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => PUNGO_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#22B573";
function PUNGO({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M11.417 20.14a9.43 9.43 0 002-.102 8.338 8.338 0 003.49-1.52c.46-.346 1.248-1.134 1.59-1.59.77-1.029 1.279-2.18 1.541-3.502.097-.5.11-2.226.023-2.738-.483-2.711-2.138-4.918-4.564-6.083l-.193-.09.315 1.119c.18.622.548 1.931.824 2.903.73 2.571.723 2.528.749 3.18.013.341.004.722-.026.955a5.256 5.256 0 01-4.508 4.498c-.477.065-1.282.035-1.733-.062-.167-.04-.311-.061-.325-.052-.013.017.71 2.623.824 2.973.024.072.032.1-.008.11zm-2.685-.655a.224.224 0 01-.015-.012c-.026-.03-.227-.67-.443-1.427-.213-.758-.612-2.16-.88-3.11-.27-.95-.517-1.879-.551-2.059-.07-.393-.08-1.314-.013-1.707.082-.485.23-.957.438-1.402.731-1.533 2.019-2.545 3.718-2.917.46-.1 1.524-.1 1.988 0 .188.044.36.062.377.04.017-.018-.163-.714-.399-1.547-.146-.499-.284-1-.414-1.503l-.48-.003c-.976-.004-1.225.022-1.98.197-1.628.38-3.205 1.354-4.295 2.637-1.81 2.128-2.417 5.032-1.612 7.672.293.973.657 1.687 1.266 2.514a8.243 8.243 0 003.295 2.627zm1.93 1.429a4.356 4.356 0 01-.504-.092 6.556 6.556 0 00-.42-.11c-1.393-.337-2.873-1.164-3.981-2.225-.846-.81-1.69-2.036-2.046-2.96a10.16 10.16 0 00-.127-.307c-.118-.25-.328-.98-.446-1.572-.128-.617-.136-.727-.136-1.625 0-.551.022-1.077.048-1.226.03-.144.088-.464.136-.705.044-.245.11-.49.14-.548a.338.338 0 00.044-.105c-.022 0 .18-.652.215-.7.017-.023.07-.14.113-.263.075-.206.32-.705.412-.855.026-.034.14-.227.258-.424.123-.201.241-.39.263-.416.026-.03.17-.214.32-.407 1.305-1.66 3.289-2.86 5.378-3.25.618-.118 2.724-.114 3.35.005a9.14 9.14 0 012.978 1.156c.438.271.469.29.964.683.42.333 1.117 1.033 1.419 1.428.118.157.267.346.328.42.062.08.114.154.114.17 0 .023.048.098.105.172.057.075.193.315.307.53.11.218.22.416.236.437.018.027.1.207.18.408.591 1.494.797 2.917.635 4.455-.066.66-.364 1.83-.591 2.33a1.938 1.938 0 00-.083.214c0 .039-.377.792-.49.98-.925 1.534-2.234 2.768-3.715 3.504-.254.127-.495.245-.538.268-.294.153-1.262.446-1.98.595-.447.092-2.317.114-2.886.035zm1.966-6.263c.95-.24 1.774-1.05 2.01-1.975.088-.346.092-1.016.005-1.353-.364-1.437-1.857-2.352-3.263-1.998-.578.145-.885.315-1.292.723-.582.583-.824 1.16-.82 1.975a2.682 2.682 0 002.02 2.61c.364.098.994.105 1.34.018z"
  }));
}
PUNGO.DefaultColor = DefaultColor;
var PUNGO_default = PUNGO;
//# sourceMappingURL=PUNGO.js.map
