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
  default: () => ETN_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#23BEE2";
function ETN({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M14.91 10.102l2.428-2.56a6.951 6.951 0 01-8.69 10.543l6.18-3.184 1.006-.519-.932-.644-.666-.46 1.942-.992.966-.494-.865-.654-1.37-1.036zm-5.82 4.15l-2.264 2.385a6.921 6.921 0 01-1.78-4.64A6.951 6.951 0 0115.68 6.098L9.172 9.453l-1.006.52.932.643.666.46-1.942.993-.966.493.865.655 1.37 1.035zm-2.688 2.833l-.469.493a8.212 8.212 0 01-2.183-5.582C3.75 7.45 7.451 3.75 12 3.75c1.87 0 3.597.625 4.982 1.678l-.676.349A7.53 7.53 0 0012 4.429c-4.174 0-7.57 3.395-7.57 7.567a7.53 7.53 0 001.973 5.088l-.001.001zm11.361-9.99l.471-.495a8.208 8.208 0 012.016 5.396c0 4.547-3.701 8.246-8.25 8.246a8.206 8.206 0 01-4.69-1.466l.693-.357A7.527 7.527 0 0012 19.562c4.174 0 7.57-3.394 7.57-7.566a7.53 7.53 0 00-1.807-4.9v-.001zm-9.632 5.58l2.956-1.51-1.602-1.107 8.872-4.573-4.465 4.7 1.976 1.495-2.955 1.51 1.602 1.107-8.872 4.574 4.465-4.701-1.976-1.495z"
  }));
}
ETN.DefaultColor = DefaultColor;
var ETN_default = ETN;
//# sourceMappingURL=ETN.js.map
