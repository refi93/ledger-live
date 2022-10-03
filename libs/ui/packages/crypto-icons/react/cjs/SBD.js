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
  default: () => SBD_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#4BA2F2";
function SBD({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M7.077 6.172c.162.028-.242 1.102-.017 2.33.195 1.052 2.63 5.127 2.53 6.525-.078.878-2.078 2.936-2.288 2.8-.23-.065.607-1.463.297-2.629-.362-1.359-2.505-4.872-2.503-6.423 0-1.135 1.836-2.677 1.98-2.603zm4.581-1.605c.206.035-.307 1.407-.02 2.97.247 1.343 3.354 6.54 3.225 8.32-.1 1.12-2.649 3.744-2.919 3.57-.292-.08.776-1.864.38-3.35-.46-1.732-3.194-6.212-3.192-8.19 0-1.448 2.342-3.412 2.526-3.32zm4.73 1.605c.161.028-.242 1.102-.017 2.33.195 1.052 2.63 5.127 2.53 6.525-.077.878-2.077 2.936-2.289 2.8-.23-.065.608-1.463.297-2.629-.36-1.359-2.505-4.872-2.503-6.423 0-1.135 1.838-2.677 1.981-2.603z"
  }));
}
SBD.DefaultColor = DefaultColor;
var SBD_default = SBD;
//# sourceMappingURL=SBD.js.map
