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
  default: () => PINK_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#ED79AA";
function PINK({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    opacity: 0.5,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.357 6.697l-1.402 1.412a5.428 5.428 0 00-3.864-1.612c-2.937 0-5.333 2.333-5.459 5.258h-.006v5.341A7.502 7.502 0 015.643 12c0-4.142 3.335-7.5 7.448-7.5a7.4 7.4 0 015.266 2.197zm0 10.606a7.4 7.4 0 01-5.145 2.197v-1.998a5.429 5.429 0 003.742-1.61l1.403 1.411z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.529 18.588v-6.833h.005c.105-1.953 1.711-3.505 3.678-3.505 2.034 0 3.683 1.66 3.683 3.71 0 2.048-1.65 3.708-3.682 3.708a3.647 3.647 0 01-1.863-.507v4.133a7.368 7.368 0 01-1.821-.705v-.001zm3.683-4.754a1.868 1.868 0 001.862-1.874 1.869 1.869 0 00-1.862-1.876 1.869 1.869 0 00-1.862 1.876c0 1.034.834 1.874 1.862 1.874z"
  }));
}
PINK.DefaultColor = DefaultColor;
var PINK_default = PINK;
//# sourceMappingURL=PINK.js.map
