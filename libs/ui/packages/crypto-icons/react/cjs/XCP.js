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
  default: () => XCP_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#ED1650";
function XCP({
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
    d: "M17.623 6.759H14.59a.462.462 0 00-.33.14L8.73 12.545a.462.462 0 01-.33.14H7.385a.461.461 0 01-.33-.14l-.717-.73a.48.48 0 01-.137-.335v-1.033a.48.48 0 01.137-.336l.717-.73a.463.463 0 01.33-.14h1.014c.124 0 .242.05.33.14l.44.448a.46.46 0 00.66 0l1.064-1.083a.481.481 0 000-.672L9.738 6.899a.463.463 0 00-.33-.14H6.375a.463.463 0 00-.33.14L3.9 9.083a.48.48 0 00-.136.336v3.088c0 .126.05.248.136.336l2.145 2.185a.464.464 0 00.33.138H9.41a.461.461 0 00.33-.139l5.531-5.646a.462.462 0 01.33-.14h1.014c.124 0 .243.05.33.14l.717.73a.48.48 0 01.138.336v1.033a.48.48 0 01-.138.335l-.717.73a.46.46 0 01-.33.14H15.6a.461.461 0 01-.33-.14l-.444-.452a.461.461 0 00-.656-.004l-1.312 1.307a.48.48 0 00-.14.34v3.03c0 .262.209.475.466.475h1.53a.472.472 0 00.467-.475v-1.125a.47.47 0 01.467-.475h1.976a.462.462 0 00.33-.138l2.145-2.185a.48.48 0 00.137-.336V9.419a.48.48 0 00-.136-.336l-2.145-2.184a.463.463 0 00-.33-.14"
  }));
}
XCP.DefaultColor = DefaultColor;
var XCP_default = XCP;
//# sourceMappingURL=XCP.js.map
