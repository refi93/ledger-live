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
  default: () => BTG_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#EBA809";
function BTG({
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
    d: "M12 20.25a8.25 8.25 0 110-16.5 8.25 8.25 0 010 16.5zm-.741-15.195c.002.656.002 1.313.002 1.969l.982.001c.002-.673.004-1.346 0-2.019-.328.011-.657.027-.984.049zm2.364 2c.864.117 1.793.248 2.48.831 1.051.943.915 2.922-.371 3.606.77.18 1.533.692 1.723 1.501.247 1.06.05 2.332-.802 3.08-.844.693-1.987.785-3.032.884.004.614.003 1.227.001 1.842 2.198-.536 4.095-2.17 4.901-4.286.765-1.951.585-4.247-.496-6.045-.955-1.62-2.578-2.812-4.4-3.268-.005.619-.005 1.237-.003 1.855h-.001zm-6.56-.026c.953.045 1.906.036 2.858.035 0-.58.002-1.159-.003-1.737-1.066.345-2.016.966-2.855 1.702zM5.953 8.521c-1.12 1.905-1.246 4.35-.312 6.354.806 1.797 2.406 3.195 4.279 3.798.003-.578.002-1.157.002-1.734-.956-.01-1.915.025-2.869-.026.01-.533.135-1.053.318-1.554.468-.01.956.072 1.408-.08.264-.222.189-.589.202-.893-.013-1.735.008-3.471-.008-5.207.017-.28-.159-.582-.45-.637-.48-.095-.973-.058-1.458-.061-.058-.39-.064-.785-.07-1.18a.29.29 0 00-.053-.232c-.275.521-.712.933-.989 1.452zm5.348.076v2.56c.855-.016 1.804.079 2.552-.418.621-.405.582-1.435-.06-1.8-.748-.444-1.662-.318-2.492-.342zm0 3.936v2.839c1.055-.085 2.24.092 3.16-.544.656-.436.577-1.515-.1-1.892-.92-.55-2.038-.375-3.06-.403zm-.039 4.444l-.003 1.97c.342.023.684.036 1.026.045.002-.671.001-1.343.001-2.015h-1.024z"
  }));
}
BTG.DefaultColor = DefaultColor;
var BTG_default = BTG;
//# sourceMappingURL=BTG.js.map
