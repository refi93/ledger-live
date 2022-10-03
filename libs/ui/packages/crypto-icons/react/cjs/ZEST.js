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
  default: () => ZEST_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#07BC9C";
function ZEST({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.507 6.231c-.427-.106-1.421-.092-1.727.327.306.17.519.433.832.44.312.008.675-.291 1.072-.12-.17 0-.938.142-.987.376.107.176.236.338.383.483.2.164.22.22.52.057.365-.23.64-.579.78-.988 0-.213.065-.07-.091-.248a1.726 1.726 0 00-.782-.327zm-4.007.377a2.65 2.65 0 011.882-.235 2.7 2.7 0 00-.894-1.776 2.668 2.668 0 011.2 1.705c.348-.057.71-.192 1.044-.242a2.885 2.885 0 00-.845-1.797c-.235-.22-.896-.803-1.273-.803-.377 0-.867.853-1.009 1.2a3.113 3.113 0 00-.106 1.948z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.407 7.723c-.128-.305.433-.426.604-.405.306.09.585.25.818.469.447.334 1.327 1.322 1.974 1.087.647-.235-.12-1.378-.476-1.677a2.565 2.565 0 00-2.203-.66 1.277 1.277 0 00-.802.71c-.043.156-.199.476.086.476h-.001z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.377 11.986c-.398-.242-.54-.953-.788-1.343-.342-.547-.839-.994-1.138-1.563-.298-.568-.333-1.002-.845-1.272a1.364 1.364 0 00-1.272 0 8.643 8.643 0 01-1.99.626 6.876 6.876 0 00-.894.277 5.01 5.01 0 01-.76.348c-.655.092-1.862-.71-1.748.532 0 .228.234.349.163.64-.071.292-.384.547-.533.775a6.972 6.972 0 00-.711 1.64 5.684 5.684 0 00.22 3.958c.263.615.613 1.19 1.038 1.706.208.242.39.504.547.781.12.329.27.645.448.945a1.336 1.336 0 001.314.477c.248-.086.487-.198.711-.334a4.843 4.843 0 011.193-.306 6.394 6.394 0 003.844-2.132 6.145 6.145 0 001.073-1.904 6.36 6.36 0 00.306-1.193c.035-.256-.043-.903.142-1.073.12-.114.405-.142.49-.25.065-.14.115-.288.149-.44.135-.419-.653-.753-.958-.895h-.001zm.54 1.016c-.107.242-.525.384-.71.64-.266.48-.62.903-1.045 1.25a2.067 2.067 0 01-2.58-.554 2.203 2.203 0 01-.482-1.385c0-.391.426-1.372 0-1.585-.426-.213-.625.476-.789.71-.286.476-.72.843-1.236 1.045a2.337 2.337 0 01-2.352-.512 2.38 2.38 0 01-.334-2.046c.01-.35-.022-.7-.092-1.044 0-.512.447-.327.81-.256.898.16 1.75.511 2.5 1.03.705.586 1.55.977 2.452 1.137a12.08 12.08 0 011.79.306c.292.085.562.227.846.327.3.097.591.222.867.376.192.085.469.255.362.533l-.007.028z"
  }));
}
ZEST.DefaultColor = DefaultColor;
var ZEST_default = ZEST;
//# sourceMappingURL=ZEST.js.map
