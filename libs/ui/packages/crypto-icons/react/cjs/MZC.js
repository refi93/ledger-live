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
  default: () => MZC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#FFAA05";
function MZC({
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
    d: "M12.608 9.05v1.397h1.66l-.75.861h-1.115v1.083h1.16l-.568.86h-.591v2.209l-.955 1.302v-3.51h-1.32l.728-.861h.592v-1.083H9.584l.75-.86h1.115V9c-.55-.595-1.308-.893-2.275-.893-1.854 0-3.321 1.977-3.321 3.942 0 1.31.3 2.42.899 3.333l-1.035 1.203C4.905 15.384 4.5 14.011 4.5 12.468c0-3.39 2.918-5.343 4.98-5.343 1.264 0 2.231.53 2.903 1.588 1.286-.882 2.6-1.323 3.945-1.323 2.058 0 3.172 2.512 3.172 4.912 0 3.194-2.15 4.427-2.934 4.57a.156.156 0 01-.154-.06.146.146 0 01.039-.208c1.214-.816 1.82-2.066 1.82-3.75 0-3.676-1.887-4.526-3.275-4.526a4.27 4.27 0 00-2.388.722z"
  }));
}
MZC.DefaultColor = DefaultColor;
var MZC_default = MZC;
//# sourceMappingURL=MZC.js.map
