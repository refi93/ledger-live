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
  default: () => DTH_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#3C80F1";
function DTH({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12 2.952a7.438 7.438 0 00-7.433 7.428c.004.4.05.8.134 1.191a.116.116 0 00.18.068c.284-.204.624-.313.973-.314a.112.112 0 00.09-.038.114.114 0 00.027-.095 4.53 4.53 0 01-.077-.803 6.105 6.105 0 0112.21 0c0 3.367-4.308 7.668-5.85 9.187a.363.363 0 01-.508 0 45.53 45.53 0 01-1.9-1.969h-.03a6.47 6.47 0 01-1.721-.412l-.102-.041a.115.115 0 00-.139.034.114.114 0 00.005.143 43.097 43.097 0 003.035 3.268 1.582 1.582 0 002.208 0c2.716-2.682 6.33-6.65 6.33-10.219A7.437 7.437 0 0012 2.952z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.09 11.132c0 .105-.008.207-.018.31-.027.39-.117.774-.268 1.135a3.89 3.89 0 01-.64.987l.008.007a5.27 5.27 0 01-1.875 1.34c-.71.304-1.483.429-2.252.36a4.169 4.169 0 01-2.03-.77c.192-.005.383-.035.57-.086.167-.047.328-.116.478-.205.323-.193.574-.487.714-.837.065-.16.11-.326.134-.497.015-.143.018-.288.013-.432V7.577v-.04a.283.283 0 01.24-.229h1.608c.381.03.754.13 1.099.295a4 4 0 011.727 1.57c.099.168.186.343.259.525.07.18.125.367.165.556.04.19.062.381.067.574v.305l.001-.001zm1.323-.35a4.513 4.513 0 00-.097-.803 4.886 4.886 0 00-.582-1.483 5.32 5.32 0 00-2.307-2.094 4.432 4.432 0 00-1.563-.416c-.069 0-.135 0-.21-.007h-1.498a1.58 1.58 0 00-.707.186 1.607 1.607 0 00-.847 1.307v4.972c0 .087-.005.174-.018.26a.752.752 0 01-.042.171.425.425 0 01-.068.114.506.506 0 01-.258.149c-.147.037-.3.05-.452.035a2.513 2.513 0 01-1.456-.65.663.663 0 00-1.032.803 6.955 6.955 0 001.885 2.192c.4.298.838.541 1.302.723.466.182.955.3 1.453.349a5.986 5.986 0 002.897-.453 6.18 6.18 0 002.353-1.716l.008.007c.351-.397.64-.846.855-1.33a4.93 4.93 0 00.364-1.549c.01-.133.017-.254.021-.381v-.188c.006-.056.001-.132 0-.198h-.001z"
  }));
}
DTH.DefaultColor = DefaultColor;
var DTH_default = DTH;
//# sourceMappingURL=DTH.js.map
