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
  default: () => UNITY_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#F58634";
function UNITY({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9.99 17.076h.003c.892-.108 1.642-.378 2.25-.81.806-.578 1.208-1.311 1.208-2.2 0-.75-.295-1.379-.883-1.892-.59-.513-1.39-.824-2.399-.932a23.117 23.117 0 00-1.452-.112c-1.361-.083-2.244-.269-2.653-.56a1.306 1.306 0 01-.36-.392.927.927 0 01-.117-.458c0-.42.243-.776.733-1.056.489-.279 1.107-.421 1.858-.421.712 0 1.418.121 2.085.36 2.87 1.023 5.61 4.599 7.435 7.16-1.488.903-3.513 1.46-5.745 1.46-.657 0-1.313-.048-1.963-.147zm-3.21-1.457c-2.619-.956-3.766-3.32-2.472-5.614.036.322.155.632.347.9.24.336.593.61 1.056.825 1.616.702 4.588.254 5.812 1.146.412.3.618.683.618 1.15 0 .587-.287 1.068-.862 1.442-.573.373-1.32.56-2.24.56a6.644 6.644 0 01-2.257-.409H6.78z"
  }), /* @__PURE__ */ React.createElement("path", {
    opacity: 0.5,
    d: "M19.458 14.183v-4.39c.493.666.768 1.41.768 2.195 0 .784-.275 1.527-.768 2.195zm-1.237-5.595l.004 5.596c-1.757-2.495-4.383-5.634-7.61-6.682a7.961 7.961 0 00-1.72-.358c1-.246 2.027-.37 3.058-.367 2.505 0 4.751.702 6.268 1.81z"
  }));
}
UNITY.DefaultColor = DefaultColor;
var UNITY_default = UNITY;
//# sourceMappingURL=UNITY.js.map
