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
  default: () => XBP_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#21AF67";
function XBP({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12 21a9 9 0 110-18 9 9 0 010 18zm3.46-12.262c-.132-.18-.348-.326-.643-.44-.295-.113-.7-.17-1.215-.17h-1.088l.883-2.426.589-1.618a8.15 8.15 0 00-1.808-.241c-.06 0-.12-.005-.18-.005-.091.001-.184.004-.275.008C7.35 3.991 3.838 7.591 3.838 12a8.141 8.141 0 002.783 6.13l.64-1.758A6.428 6.428 0 015.547 12c0-3.246 2.409-5.938 5.533-6.386.154-.023.314-.038.472-.051l-2.356 6.475 4.702-.463a.049.049 0 00-.008-.002c.146-.048.287-.11.42-.188.343-.197.645-.458.889-.77.133-.173.24-.366.313-.572.083-.221.13-.454.14-.688a.958.958 0 00-.192-.617zm-2.006 1.579c-.103.279-.262.476-.484.589-.207.11-.438.169-.672.17h-.848l.569-1.562h.847c.101 0 .203.013.3.039.09.02.172.064.24.126a.387.387 0 01.114.247.869.869 0 01-.066.391zm.946-6.119l-.586 1.61a6.453 6.453 0 11-4.32 12.138 6.553 6.553 0 01-.389-.182l.669-1.834h1.086c.984 0 1.791-.166 2.423-.501.63-.334 1.08-.867 1.347-1.6.098-.272.135-.51.106-.716a1.298 1.298 0 00-.181-.528 1.148 1.148 0 00-.345-.353 1.992 1.992 0 00-.346-.178l-4.744.468-1.526 4.186-.623 1.713A8.105 8.105 0 0012 20.16c4.5 0 8.162-3.66 8.162-8.161 0-3.665-2.429-6.774-5.762-7.801zm-3.48 8.607h.99c.118 0 .236.012.352.034.113.018.222.059.319.12.09.061.154.152.181.258.031.113.015.261-.052.445a1.3 1.3 0 01-.282.473c-.106.11-.232.2-.372.264a1.436 1.436 0 01-.405.116 2.85 2.85 0 01-.373.027h-.992l.634-1.737z"
  }));
}
XBP.DefaultColor = DefaultColor;
var XBP_default = XBP;
//# sourceMappingURL=XBP.js.map
