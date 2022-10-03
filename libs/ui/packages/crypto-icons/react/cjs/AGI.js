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
  default: () => AGI_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#6916FF";
function AGI({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12.739 5.04a.21.21 0 01-.06-.271.217.217 0 01.233 0c.529.219 1.007.543 1.406.954.228.21.418.456.563.727.153.276.278.565.375.864.092.31.14.631.141.954-.047.319-.094 1.864-.985 2.591a.535.535 0 01-.703-.136.47.47 0 01-.047-.546 3.785 3.785 0 00.094-3.954 8.24 8.24 0 00-1.017-1.182zm-1.383 13.937c.094.091.094.182.047.227-.046.046-.14.091-.187.046a4.222 4.222 0 01-1.407-.954 2.782 2.782 0 01-.562-.728 4.845 4.845 0 01-.375-.863 3.36 3.36 0 01-.141-.955c.047-.318.094-1.864.985-2.591a.536.536 0 01.703.136.405.405 0 010 .546 3.785 3.785 0 00-.094 3.954c.304.425.65.821 1.031 1.182z",
    fillOpacity: 0.2
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.402 15.227a4.105 4.105 0 00-.985-2.363 8.11 8.11 0 00-1.969-1.455c-.633-.35-1.23-.763-1.781-1.232a3.024 3.024 0 01-.89-1.59 3.182 3.182 0 01.229-1.86 5.019 5.019 0 011.317-1.682.195.195 0 00.047-.227.181.181 0 00-.281-.045A4.183 4.183 0 009.26 6.318a3.757 3.757 0 00-.66 2.455c.037.44.148.87.328 1.273a4.5 4.5 0 00.75 1.09 8.088 8.088 0 002.015 1.41c.636.33 1.234.726 1.782 1.181.481.423.797 1.003.89 1.637.133.659.05 1.342-.234 1.954a4.598 4.598 0 01-1.36 1.637.154.154 0 00-.074.103.153.153 0 00.027.124.18.18 0 00.13.09.185.185 0 00.152-.044 5.85 5.85 0 001.781-1.592 3.88 3.88 0 00.614-2.409z"
  }));
}
AGI.DefaultColor = DefaultColor;
var AGI_default = AGI;
//# sourceMappingURL=AGI.js.map
