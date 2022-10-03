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
  default: () => LOOM_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#48BEFF";
function LOOM({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M16.646 19.68L4.358 11.057a3.186 3.186 0 010-5.215L7.335 3.75l12.29 8.62a3.184 3.184 0 010 5.215l-2.98 2.094zM7.332 5.146L5.012 6.77a2.047 2.047 0 000 3.355l11.636 8.158 2.32-1.623a2.047 2.047 0 000-3.355L7.332 5.147z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7.322 18.282l-2.317-1.626a2.046 2.046 0 010-3.354l6-4.188-.99-.696-5.658 3.951a3.186 3.186 0 000 5.215l2.967 2.084 3.673-2.572-.985-.694-2.69 1.88zM19.627 5.846l-2.97-2.082-3.675 2.571.986.694 2.685-1.878 2.317 1.625a2.047 2.047 0 010 3.354l-6 4.187.987.694 5.665-3.957a3.183 3.183 0 000-5.215l.006.007z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5.06 11.872L9.731 8.6l.65.93-4.672 3.272-.65-.93zm13.312-1.319l-2.276 1.594.65.93 2.357-1.652c-.25-.287-.493-.58-.736-.873l.005.001z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.646 19.68L4.358 11.057a3.186 3.186 0 010-5.215L7.335 3.75l12.29 8.62a3.184 3.184 0 010 5.215l-2.98 2.094zM7.332 5.146L5.012 6.77a2.047 2.047 0 000 3.355l11.636 8.158 2.32-1.623a2.047 2.047 0 000-3.355L7.332 5.147z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7.322 18.282l-2.317-1.626a2.046 2.046 0 010-3.354l6-4.188-.99-.696-5.658 3.951a3.186 3.186 0 000 5.215l2.967 2.084 3.673-2.572-.985-.694-2.69 1.88zM19.627 5.846l-2.97-2.082-3.675 2.571.986.694 2.685-1.878 2.317 1.625a2.047 2.047 0 010 3.354l-6 4.187.987.694 5.665-3.957a3.183 3.183 0 000-5.215l.006.007z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5.06 11.872L9.731 8.6l.65.93-4.672 3.272-.65-.93zm13.312-1.319l-2.276 1.594.65.93 2.357-1.652c-.25-.287-.493-.58-.736-.873l.005.001z"
  }));
}
LOOM.DefaultColor = DefaultColor;
var LOOM_default = LOOM;
//# sourceMappingURL=LOOM.js.map
