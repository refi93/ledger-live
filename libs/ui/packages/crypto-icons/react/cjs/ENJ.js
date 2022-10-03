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
  default: () => ENJ_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#624DBF";
function ENJ({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M16.735 6.75c.37.043.745.066 1.111.132.725.137.962.482.84 1.182-.05.283-.233.458-.524.505a3.84 3.84 0 01-.524.038c-2.38.005-4.764.01-7.144.02-.36 0-.716.032-1.067.09-1.18.184-1.624.652-1.723 1.79-.045.535-.045.535.514.535h9.77a.847.847 0 01.43.113c.435.265.327.68.302 1.064-.02.307-.212.477-.543.538-.139.022-.28.031-.42.029H8.014c-.36 0-.354 0-.325.34.025.312.045.62.124.922.147.563.508.912 1.09 1.068.647.175 1.314.213 1.98.218 2.326.014 4.647.01 6.973.01.296 0 .572.037.745.297.336.501.075 1.2-.513 1.38-.504.156-1.032.194-1.556.199-2.182.037-4.365.043-6.547 0a11.93 11.93 0 01-2.004-.222c-1.556-.308-2.331-1.064-2.593-2.558-.06-.345-.094-.694-.138-1.04v-2.727c.03-.27.054-.538.09-.803.206-1.693.997-2.525 2.734-2.893.618-.133 1.25-.161 1.872-.223 2.256-.004 4.521-.004 6.789-.004z"
  }));
}
ENJ.DefaultColor = DefaultColor;
var ENJ_default = ENJ;
//# sourceMappingURL=ENJ.js.map
