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
  default: () => GXS_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#35A5F3";
function GXS({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M5.265 5.27c.952-.995 2.692-1.035 3.675-.067a220.209 220.209 0 013.051 3.043c1.071-1.018 2.073-2.104 3.149-3.117 1.023-.924 2.763-.813 3.671.222.932.977.917 2.68-.05 3.628-.995 1.013-2.003 2.012-3.008 3.017 1.026 1.056 2.095 2.072 3.113 3.142.912 1 .825 2.704-.164 3.623-.973.982-2.718.985-3.689-.002-1.01-.991-1.999-2.007-3.002-3.003-1.071 1.03-2.093 2.112-3.175 3.132-1.036.92-2.784.782-3.676-.273-.9-.974-.878-2.634.06-3.577a162.95 162.95 0 012.674-2.676l1.13 1.13c-.882.91-1.81 1.781-2.678 2.705-.586.6-.07 1.72.753 1.706.499.044.843-.37 1.167-.681.86-.876 1.733-1.737 2.594-2.613-1.875-1.891-3.78-3.756-5.646-5.656-.974-.981-.943-2.73.052-3.683h-.001zm1.09 2.543c.992 1.035 2.022 2.033 3.032 3.05.488-.493.978-.983 1.472-1.471-.977-.985-1.95-1.977-2.942-2.948-.315-.341-.855-.468-1.267-.223-.573.277-.754 1.13-.296 1.592zm9.704-1.343c-1.864 1.83-3.691 3.7-5.546 5.538.5.486 1 .972 1.487 1.47.375-.369.747-.742 1.12-1.116.376.376.75.754 1.13 1.128-.369.375-.74.747-1.113 1.117 1.005 1.012 1.992 2.042 3.03 3.021.528.555 1.55.218 1.703-.513.163-.517-.209-.965-.56-1.29a1624.114 1624.114 0 01-4.947-4.945c.377-.376.752-.753 1.126-1.132.375.373.75.747 1.133 1.114.986-1.022 2.031-1.987 3.003-3.025.49-.476.294-1.387-.332-1.644-.42-.217-.932-.064-1.234.277z"
  }));
}
GXS.DefaultColor = DefaultColor;
var GXS_default = GXS;
//# sourceMappingURL=GXS.js.map
