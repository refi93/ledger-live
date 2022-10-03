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
  default: () => PPC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#fff";
function PPC({
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
    d: "M6.75 5.625c9.07.335 12.567 5.78 10.811 10.637-.497 1.352-1.026 2.093-2.137 2.863.045-.195.091-.39.127-.59.657-3.79-.588-8.35-6.684-10.87 4.85 2.886 6.806 8.021 4.545 11.336-3.85.605-6.662-2.682-6.662-6.47V5.626z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.375 5.25c9.07.335 12.567 5.78 10.811 10.637-.497 1.352-1.026 2.093-2.137 2.863.045-.195.091-.39.127-.59.657-3.79-.588-8.35-6.684-10.87 4.85 2.886 6.807 8.021 4.545 11.336-3.85.605-6.662-2.682-6.662-6.47V5.25z"
  }));
}
PPC.DefaultColor = DefaultColor;
var PPC_default = PPC;
//# sourceMappingURL=PPC.js.map
