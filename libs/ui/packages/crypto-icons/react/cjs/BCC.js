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
  default: () => BCC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#F7931C";
function BCC({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M5.513 14.232c-.006-2.26 1.585-4.155 3.86-4.582.195-.036.25-.101.245-.292a31.23 31.23 0 010-1.521c.004-.183-.054-.291-.21-.393-.547-.357-.77-1.005-.57-1.587a1.406 1.406 0 011.416-.968c.577.027 1.106.457 1.262 1.028a1.368 1.368 0 01-.57 1.519c-.18.114-.236.229-.23.433.015.507.01 1.014.003 1.522-.002.147.02.225.194.248.332.044.657.133.964.265.116.05.178.02.255-.066a956.673 956.673 0 013.239-3.55c.112-.121.08-.204.028-.33a1.617 1.617 0 01.389-1.818c.454-.424 1.206-.545 1.749-.281.639.31.99.903.947 1.6-.059.934-.967 1.637-1.888 1.445-.186-.039-.294.006-.415.14a597.97 597.97 0 01-3.018 3.31c-.122.133-.14.204.013.336 1.653 1.442 2.103 3.614 1.16 5.592-.07.15-.055.236.06.345.276.262.542.533.806.806.105.11.204.138.36.098a1.389 1.389 0 011.344 2.307c-.415.442-1.094.57-1.621.306-.576-.288-.894-.904-.758-1.536.04-.181-.002-.285-.123-.4-.224-.211-.441-.43-.65-.655-.123-.132-.199-.134-.338-.003-1.425 1.327-3.076 1.67-4.899 1.023-1.812-.643-2.999-2.405-3.004-4.34"
  }));
}
BCC.DefaultColor = DefaultColor;
var BCC_default = BCC;
//# sourceMappingURL=BCC.js.map
