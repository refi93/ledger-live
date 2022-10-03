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
  default: () => WICC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#5783CB";
function WICC({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M11.482 3h.93a8.688 8.688 0 015.46 2.28c.255.165.255.57-.045.675-.255.06-.45-.165-.645-.3a8.055 8.055 0 00-11.1 1.29 7.875 7.875 0 008.7 12.405 8.1 8.1 0 005.28-6 9.915 9.915 0 00.255-1.665.316.316 0 01.63.06l-.03.93a8.745 8.745 0 01-2.58 5.745 8.94 8.94 0 01-5.85 2.58h-.885a9.015 9.015 0 01-8.55-8.58v-.84A9.045 9.045 0 0111.482 3z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.802 7.665c.6-.66 1.845-.3 1.98.585.195.795-.57 1.47-1.35 1.41-1.035 1.05-1.86 2.295-2.565 3.6-.285.39.075.9-.15 1.305-.27.795-1.44.96-1.95.3-.375-.42-.27-1.005-.075-1.47a6.062 6.062 0 00-1.125-1.605l-.45.015a14.46 14.46 0 00-2.415 3.645c.105.405.18.885-.105 1.245-.375.615-1.365.675-1.83.105-.345-.39-.3-.945-.12-1.41a14.1 14.1 0 00-2.19-3.9c-.585-.03-1.2-.375-1.275-.99-.195-.84.765-1.65 1.56-1.275.705.255.9 1.155.555 1.77a14.355 14.355 0 002.355 3.96 12.716 12.716 0 002.595-3.705c-.12-.405-.195-.87.075-1.245.405-.66 1.485-.675 1.905-.015.315.405.21.945.03 1.38a6.3 6.3 0 001.095 1.62l.45-.03c1.095-1.155 2.1-2.43 2.775-3.885-.075-.48-.165-1.05.24-1.41h-.015z"
  }));
}
WICC.DefaultColor = DefaultColor;
var WICC_default = WICC;
//# sourceMappingURL=WICC.js.map
