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
  default: () => MLN_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#fff";
function MLN({
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
    d: "M6.47 15.093l3.954 2.319v1.297L5.25 15.664V7.72L12 3.75l6.75 3.971v7.943l-5.174 3.045V17.41l3.953-2.318-1.02-.59.133-.231 1.008.582v-5.89l-5.115 3.032v8.67L12 21l-.536-.334v-8.67L6.35 8.965v5.888l1.007-.581.133.232-1.02.589zm5.381-9.982L6.885 8.024 12 11.057l5.115-3.033-4.996-2.93v1.202h-.268V5.11zm0 1.944h.268v1.242h-.268V7.054zm0 2h.268v1.243l-.134.061-.133-.06V9.056zm4.17 4.838l-.133.232-1.077-.622.134-.232 1.076.623v-.001zm-1.698-1l-.135.232-1.076-.623.015-.145.119-.085 1.077.62zm-6.345 1l1.076-.622.134.233-1.076.62-.134-.231zm1.7-1l1.075-.622.12.086.014.146-1.076.621-.134-.232z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.47 14.718l3.954 2.319v1.297L5.25 15.289V7.346L12 3.375l6.75 3.971v7.943l-5.174 3.045v-1.298l3.953-2.318-1.02-.59.133-.231 1.008.582v-5.89l-5.115 3.032v8.67l-.535.334-.536-.334v-8.67L6.35 8.59v5.888l1.007-.581.133.232-1.02.589zm5.381-9.982L6.885 7.649 12 10.681l5.115-3.032-4.996-2.93V5.92h-.268V4.735zm0 1.944h.268v1.242h-.268V6.68zm0 2h.268v1.243l-.134.061-.133-.06V8.681zm4.17 4.838l-.133.232-1.077-.622.134-.232 1.076.623v-.001zm-1.698-1l-.135.232-1.076-.623.015-.145.119-.085 1.077.62zm-6.345 1l1.076-.622.134.233-1.076.62-.134-.231zm1.7-1l1.075-.622.12.086.014.146-1.076.621-.134-.232z"
  }));
}
MLN.DefaultColor = DefaultColor;
var MLN_default = MLN;
//# sourceMappingURL=MLN.js.map
