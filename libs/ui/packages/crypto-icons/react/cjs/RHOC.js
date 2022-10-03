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
  default: () => RHOC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#CC1E46";
function RHOC({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.613 6.903a8.38 8.38 0 014.315-1.65c.159-.033.331.068.326.243.015.42.005.84.005 1.26.01.13-.059.3-.209.304-1.384.153-2.7.719-3.843 1.5-.108.06-.084.201-.075.303.08.737.026 1.478.047 2.217 3.73.01 7.463-.001 11.195.006.178-.015.365.086.35.285.02 1.256.005 2.513.008 3.768.003.683-.142 1.39-.555 1.947-.653.877-1.8 1.403-2.89 1.21-.773-.116-1.44-.596-1.909-1.204a8.406 8.406 0 01-4.383 1.661c-.161.003-.282-.156-.257-.31.005-.44-.01-.88.007-1.32.038-.233.324-.188.495-.226 1.308-.204 2.559-.752 3.627-1.53a28.004 28.004 0 01-.058-2.452c-3.744-.024-7.49-.001-11.234-.012-.165.02-.324-.105-.308-.28-.003-1.322-.002-2.645.002-3.967.007-.691.225-1.39.684-1.918.603-.687 1.514-1.125 2.438-1.071.885.035 1.697.538 2.222 1.236zM4.776 8.884c-.001.775-.002 1.55.002 2.327.925-.001 1.85.012 2.774-.008.001-.756.011-1.511-.005-2.267-.014-.725-.669-1.365-1.396-1.35-.71-.03-1.358.592-1.375 1.297v.001zm11.782 3.968c-.008.736-.002 1.473-.005 2.21-.004.295.085.583.255.823.356.507 1.064.73 1.643.505.535-.198.888-.757.882-1.32 0-.74.004-1.477-.003-2.217-.924-.007-1.848-.004-2.772-.002z"
  }));
}
RHOC.DefaultColor = DefaultColor;
var RHOC_default = RHOC;
//# sourceMappingURL=RHOC.js.map
