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
  default: () => BZE_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#fff";
function BZE({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10.464 18.346H6.198l.837-4.736 4.429-3.99H7.697l3.046-1.866h4.952L9.29 14.075l-.43 2.415s1.43.105 2.557 0c1.128-.116 2.395-.583 2.395-.583l-3.348 2.438zm6.708-10.137l-1.907 1.867s1.605 1.784.128 4.234c-1.453 2.403-6.277 1.96-6.277 1.96l.372-2.111 6.788-6.627H10.65l.57-3.22H8.5l-.977 5.506h3.465l-4.116 3.71L6 18.521s3.29.093 6.08 0c2.802-.094 6.068-2.497 6.545-5.215.65-3.674-1.453-5.097-1.453-5.097z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.09 18.908H5.822l.837-4.736 4.429-3.99H7.322l3.046-1.866h4.952l-6.405 6.322-.43 2.415s1.43.105 2.557 0c1.128-.116 2.395-.582 2.395-.582l-3.348 2.437zm6.707-10.137l-1.906 1.867s1.604 1.785.127 4.235c-1.453 2.403-6.277 1.96-6.277 1.96l.372-2.112 6.789-6.626h-5.627l.57-3.22h-2.72l-.977 5.506h3.465l-4.116 3.71-.872 4.993s3.29.093 6.08 0c2.802-.094 6.068-2.497 6.545-5.215.65-3.675-1.453-5.098-1.453-5.098z"
  }));
}
BZE.DefaultColor = DefaultColor;
var BZE_default = BZE;
//# sourceMappingURL=BZE.js.map
