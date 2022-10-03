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
  default: () => FIL_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#42C1CA";
function FIL({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M11.57 9.514c.278-1.172.614-2.226.971-2.914.132-.328.664-1.115 1.248-1.635.973-.866 2.065-1.086 3.2-.373l-.099.159.1-.159c.58.364.812.738.71 1.09-.075.263-.362.473-.516.452a.93.93 0 01-.668-.182 1.264 1.264 0 01-.405-.54c-.16-.376-.368-.503-.623-.473-.186.02-.401.14-.47.219l-.176.195a2.917 2.917 0 00-.363.476c-.356.595-.686 1.685-1.143 3.943l3.027.443-.166 1.213-3.072-.45-.131.798-.034.2-.06.335 3.102.455-.178 1.211-3.175-.465c-.366 1.559-.85 3.229-1.19 3.888-.133.33-.664 1.115-1.248 1.635-.973.866-2.065 1.086-3.2.373-.58-.364-.813-.739-.711-1.091.075-.263.362-.472.516-.45a.933.933 0 01.667.18c.167.123.305.302.406.542.16.374.368.502.623.472.186-.021.401-.14.47-.22.68-.757 1.219-2.216 1.9-5.587l-3.027-.444.167-1.213 3.072.45.132-.797c.03-.179.06-.358.094-.536l-3.09-.452.177-1.212 3.162.464z"
  }));
}
FIL.DefaultColor = DefaultColor;
var FIL_default = FIL;
//# sourceMappingURL=FIL.js.map
