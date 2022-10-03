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
  default: () => XSG_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#D21E2B";
function XSG({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12.123 4.715V2.574l7.97 4.599-1.844 1.071-6.126-3.529zm6.249 10.813V8.472l1.86-1.071v9.198l-1.86-1.071zm-6.25 3.757l6.127-3.528 1.843 1.07-7.97 4.599v-2.141zm-8.231-2.458l1.86-1.07 6.108 3.528v2.141l-7.968-4.599zm-.123-9.426L5.61 8.472v7.056l-1.842 1.071V7.401zm.123-.228l7.968-4.599v2.141L5.751 8.244l-1.86-1.071zm8.118-2.256l-6.144 3.53v7.09l6.144 3.547 6.126-3.546V8.447l-6.126-3.53zm4.932 6.338l-.263.455-1.755-.982-2.247 1.263 2.246 1.264 1.755-.983.264.456-1.474.825 1.474.825-.263.457-1.474-.825v1.65h-.545v-1.949l-2.246-1.263v2.527l1.738.966-.264.447-1.474-.825v1.65h-.545v-1.65l-1.475.825-.28-.456 1.755-.966v-2.518L9.62 13.71v1.949h-.562v-1.65l-1.457.825-.28-.457 1.474-.825-1.475-.825.281-.456 1.738.983 2.264-1.264-2.265-1.264-1.737.983-.28-.456 1.474-.825-1.475-.825.281-.456 1.457.825v-1.66h.562v1.95l2.247 1.263V9.008l-1.738-.966.263-.457 1.475.826V6.76h.544v1.65l1.475-.825.262.455-1.737.966v2.528l2.246-1.264V8.314h.545v1.65l1.474-.825.263.457-1.474.825 1.475.833z"
  }));
}
XSG.DefaultColor = DefaultColor;
var XSG_default = XSG;
//# sourceMappingURL=XSG.js.map
