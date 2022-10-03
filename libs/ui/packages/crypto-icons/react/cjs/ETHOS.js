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
  default: () => ETHOS_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#00FFBA";
function ETHOS({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.154 8.178a1.28 1.28 0 00-.146 1.61 1.269 1.269 0 001.065.568 1.641 1.641 0 110 3.283 4.564 4.564 0 01-3.208-7.814A4.563 4.563 0 0112 5.57a4.564 4.564 0 00-1.637 3.504 1.641 1.641 0 001.631 1.642 1.64 1.64 0 01-1.64-1.642 1.268 1.268 0 00-.218-.716 1.296 1.296 0 00-.566-.466 1.292 1.292 0 00-.997 0c-.158.066-.3.164-.42.287zm10.98 4.97a4.57 4.57 0 01-3.267 6.248 4.564 4.564 0 01-5.502-4.47 1.641 1.641 0 113.281 0 1.274 1.274 0 00.784 1.183 1.29 1.29 0 001.005-.004c.307-.133.55-.38.68-.688a1.288 1.288 0 00-.688-1.673 1.27 1.27 0 00-.498-.1 1.641 1.641 0 010-3.283 4.561 4.561 0 014.204 2.788z"
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: 0.7,
    d: "M11.996 13.286c.906 0 1.641.735 1.641 1.64a4.563 4.563 0 01-9.053.83 4.565 4.565 0 014.489-5.395 1.64 1.64 0 110 3.283c-.255 0-.504.075-.716.218a1.283 1.283 0 00-.207 1.955v.001a1.28 1.28 0 002.055-.288c.1-.186.15-.394.15-.604 0-.905.735-1.64 1.641-1.64zm6.995-6.297a4.567 4.567 0 01-4.063 6.65 1.642 1.642 0 110-3.283 1.282 1.282 0 00.803-2.285 1.279 1.279 0 00-1.518-.062 1.274 1.274 0 00-.567 1.065 1.641 1.641 0 11-3.282 0 4.565 4.565 0 017.288-3.665l.003.002c.56.417 1.016.957 1.335 1.578z"
  }));
}
ETHOS.DefaultColor = DefaultColor;
var ETHOS_default = ETHOS;
//# sourceMappingURL=ETHOS.js.map
