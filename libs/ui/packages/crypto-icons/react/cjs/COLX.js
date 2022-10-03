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
  default: () => COLX_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#77C3B0";
function COLX({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M19.412 9.578l-1.266-1.266a2.035 2.035 0 00-1.452-.6H16.5v-.203c0-.355-.084-.692-.26-.996a1.78 1.78 0 00-.355-.472l-1.266-1.267a2.037 2.037 0 00-1.453-.6H7.33c-.549 0-1.063.211-1.452.6L4.613 6.04a2.002 2.002 0 00-.6 1.444l-.033 5.47c-.008.549.211 1.08.6 1.47l1.266 1.266a2.036 2.036 0 001.452.6h.228v.202c0 .354.084.692.261.996.093.178.211.337.355.472l1.266 1.268a2.039 2.039 0 001.452.598h5.843c.549 0 1.063-.21 1.452-.599l1.266-1.266a2.04 2.04 0 00.6-1.452v-5.488a2.047 2.047 0 00-.608-1.443zM7.298 14.432a.204.204 0 01-.144-.059l-.633-.634-.633-.633a.3.3 0 01-.06-.11V7.494a.2.2 0 01.06-.144l1.266-1.266c.017-.018.034-.026.05-.034a.225.225 0 01.102-.026h5.842c.034 0 .06.009.093.026.026.008.042.025.06.042l1.266 1.267a.152.152 0 01.042.058c.009.009.009.017.009.026 0 .008.007.017.007.025s.01.034.01.05v.27a.2.2 0 01-.203.203h-1.013a.204.204 0 01-.144-.059l-.574-.573H7.754l-.211.21-.287.288v4.752l.498.498h4.938l.575-.582.007-.009c.018-.008.035-.025.051-.034.026-.016.06-.016.085-.016h1.013c.067 0 .127.034.17.084.025.034.04.076.041.119v.287a.204.204 0 01-.06.143l-.632.633-.633.633c-.008.009-.026.017-.034.025 0 0-.008.009-.017.009-.008.009-.017.009-.026.009-.007 0-.007 0-.016.008-.008 0-.017.008-.026.008H7.298v.008zm10.874 2.06a.204.204 0 01-.06.143l-1.266 1.267a.18.18 0 01-.05.034.224.224 0 01-.102.025h-5.842a.191.191 0 01-.093-.025.151.151 0 01-.059-.043l-1.266-1.266a.15.15 0 01-.042-.06c-.01-.007-.01-.016-.01-.024 0-.01-.007-.017-.007-.026 0-.008-.009-.034-.009-.05v-.27a.2.2 0 01.203-.203h1.012c.06 0 .11.025.144.059l.575.574h4.938l.211-.211.287-.287v-4.753l-.498-.499h-4.93l-.574.583-.009.008c-.016.01-.034.026-.05.034-.026.017-.06.017-.085.017H9.578a.22.22 0 01-.17-.085.202.202 0 01-.042-.117v-.287a.203.203 0 01.06-.144l.632-.633.633-.633c.01-.009.026-.017.034-.026 0 0 .01-.007.017-.007.009-.01.017-.01.026-.01.007 0 .007 0 .016-.008.009 0 .018-.009.026-.009h5.884c.059 0 .11.026.144.06l.633.633.633.633c.008.009.017.017.025.034a.281.281 0 01.034.076v.042c.009-.017.009 5.454.009 5.454z"
  }));
}
COLX.DefaultColor = DefaultColor;
var COLX_default = COLX;
//# sourceMappingURL=COLX.js.map
