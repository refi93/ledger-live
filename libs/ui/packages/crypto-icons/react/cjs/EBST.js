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
  default: () => EBST_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#1693D4";
function EBST({
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
    d: "M8.196 12.43c-.02-.27-.02-.54-.004-.81h-2.1L3.75 9.748h4.87A6.037 6.037 0 0114.216 6c3.333 0 6.034 2.687 6.034 6s-2.701 6-6.034 6a6.037 6.037 0 01-5.574-3.696H3.75l2.342-1.873h2.104zm9.457-.318c0-.623-.084-1.166-.253-1.63a3.263 3.263 0 00-.701-1.162 2.896 2.896 0 00-1.064-.703 3.697 3.697 0 00-1.337-.237c-.52 0-1.005.088-1.454.265a3.465 3.465 0 00-1.163.747 3.453 3.453 0 00-.774 1.162c-.188.454-.282.96-.282 1.515 0 .564.094 1.069.282 1.513.188.445.448.821.78 1.127.333.307.726.543 1.18.711.477.172.981.257 1.489.251 1.301 0 2.295-.46 2.979-1.378l-1.158-.918a2.045 2.045 0 01-.737.652c-.298.158-.665.237-1.098.237-.251 0-.492-.042-.724-.129a2.215 2.215 0 01-.622-.351 1.695 1.695 0 01-.636-1.213h5.279c.01-.077.014-.153.014-.23v-.23zm-1.736-.776H12.36c.039-.487.239-.887.6-1.198.362-.31.802-.467 1.324-.467.279 0 .522.045.73.137.207.091.378.213.513.366s.234.33.296.53c.064.205.095.418.094.632z"
  }));
}
EBST.DefaultColor = DefaultColor;
var EBST_default = EBST;
//# sourceMappingURL=EBST.js.map
