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
  default: () => XBTC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#fff";
function _0XBTC({
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
    d: "M12 20.444A8.443 8.443 0 013.557 12 8.443 8.443 0 0112 3.557 8.443 8.443 0 0120.444 12 8.443 8.443 0 0112 20.444zm0-.497a7.947 7.947 0 100-15.894 7.947 7.947 0 000 15.894z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.568 18.099c.186-.076.913-.637 1.616-1.241.87-.741 1.709-1.52 2.51-2.335.77-.77 1.056-1.1 1.103-1.271.167-.601-1.654-7.205-2.024-7.346-.226-.087-2.245 1.592-4.033 3.35-1.048 1.03-1.338 1.373-1.361 1.597-.015.174.045.608.157 1.122.445 2.042 1.254 4.862 1.663 5.789.172.393.191.41.368.335z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 20.444A8.443 8.443 0 013.556 12 8.443 8.443 0 0112 3.556 8.443 8.443 0 0120.444 12 8.443 8.443 0 0112 20.444zm0-.497a7.947 7.947 0 100-15.894 7.947 7.947 0 000 15.894z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.568 18.099c.186-.076.913-.637 1.616-1.241.87-.741 1.709-1.52 2.51-2.335.77-.77 1.056-1.1 1.103-1.271.167-.601-1.654-7.205-2.024-7.347-.226-.087-2.245 1.593-4.033 3.35-1.048 1.031-1.339 1.374-1.361 1.598-.015.174.045.608.157 1.122.444 2.042 1.254 4.862 1.663 5.789.172.393.191.41.368.335z"
  }));
}
_0XBTC.DefaultColor = DefaultColor;
var XBTC_default = _0XBTC;
//# sourceMappingURL=_0XBTC.js.map
