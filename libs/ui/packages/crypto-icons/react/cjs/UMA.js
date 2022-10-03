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
  default: () => UMA_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#FF4A4A";
function UMA({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M14.524 14.243h-.759a.26.26 0 01-.26-.26v-1.997l-1.33.83a.344.344 0 01-.365 0l-1.322-.83v1.997a.26.26 0 01-.26.26h-.752a.26.26 0 01-.26-.26V10.13a.345.345 0 01.345-.345c.07 0 .132.022.189.064l2.095 1.441a.242.242 0 00.289 0l2.095-1.441a.348.348 0 01.541.28v3.854a.245.245 0 01-.149.24.248.248 0 01-.097.02zm-6.44-.007h-4.71a.345.345 0 01-.346-.345v-3.874a.265.265 0 01.267-.26h.76c.14 0 .26.113.26.26v2.946H7.17v-2.946a.26.26 0 01.26-.26h.739a.26.26 0 01.26.26v3.875a.345.345 0 01-.345.344zm7.832-4.479h4.712a.345.345 0 01.344.345v3.874c0 .14-.113.26-.254.26h-.759a.258.258 0 01-.26-.26v-2.777a.17.17 0 00-.169-.17h-2.51a.17.17 0 00-.169.17v2.777a.26.26 0 01-.26.26h-.759a.258.258 0 01-.26-.26V10.1a.345.345 0 01.345-.344z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.892 11.845h.753c.14 0 .26.113.26.26v.767a.26.26 0 01-.26.26h-.753a.258.258 0 01-.26-.26v-.773c0-.141.12-.254.26-.254z"
  }));
}
UMA.DefaultColor = DefaultColor;
var UMA_default = UMA;
//# sourceMappingURL=UMA.js.map
