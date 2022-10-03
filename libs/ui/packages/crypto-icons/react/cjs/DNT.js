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
  default: () => DNT_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#2C398F";
function DNT({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M18.806 14.325c.395-.02.772-.172 1.07-.432-.414 2.111-1.57 4.19-3.551 5.332-1.517.883-3.413 1.177-5.256.952-.276-.796-1-1.644-2.258-2.285-1.982-1.021-2.913-2.787-3.757-1.922a.921.921 0 00-.19.26 3.276 3.276 0 01-.104-.243C3.14 11.97 4.76 7.935 8 5.044c1.93-1.715 4.188-1.524 6.205-.589a1.022 1.022 0 00-.38.814V9.32a4.076 4.076 0 00-5.207.944 4.123 4.123 0 00.078 5.316 4.076 4.076 0 005.233.788 1.049 1.049 0 002-.45V5.477c1.55 1.09 2.791 2.475 3.36 3.428.277.478.475.999.586 1.541-.244-.18-.528-.3-.827-.346-.638-.035-1.12.832-.793 2.077.276 1.127-.069 2.114.551 2.148zm-7.772.07c-2.172-1.247-.345-4.45 1.827-3.204.655.364.724 1.524.603 2.268-.224 1.282-1.43 1.507-2.43.935zm1.017-8.278c-.483.017-.827.606-.81.866.017.26.379.416.878.243.449-.156.863-.053.845-.312-.017-.26-.448-.814-.913-.797z"
  }));
}
DNT.DefaultColor = DefaultColor;
var DNT_default = DNT;
//# sourceMappingURL=DNT.js.map
