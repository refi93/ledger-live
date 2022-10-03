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
  default: () => IQ_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#5DF";
function IQ({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9.05 7.786a5.715 5.715 0 011.5-3.84c.262-.262.292-.315.292-.525 0-.21 0-.225-.158-.225a4.223 4.223 0 00-.577.105A9.075 9.075 0 004.64 7.104a8.46 8.46 0 00-1.275 3 10.552 10.552 0 00-.135 3 8.752 8.752 0 003.12 5.677c.922.75 1.957 1.35 1.957 1.08a1.073 1.073 0 00-.24-.308 4.755 4.755 0 01-1.192-3.817 5.453 5.453 0 012.55-4.2c.182-.13.376-.246.577-.345.112 0 .045-.225-.232-.75a5.182 5.182 0 01-.72-2.655zm11.632 2.34a9 9 0 00-4.56-6.12c-.42-.232-.63-.285-.63-.142.04.12.1.231.18.33.465.66.726 1.442.75 2.25a3 3 0 01-.75 2.34.81.81 0 01-1.133.045c-.3-.218-.3-.368-.112-.645a3.27 3.27 0 00.563-1.988 1.913 1.913 0 00-.556-1.552 1.448 1.448 0 00-1.454-.383 2.377 2.377 0 00-1.44 1.725 6.862 6.862 0 00-.3 1.71c.005.889.224 1.763.637 2.55.288.452.645.857 1.057 1.2a.98.98 0 01.218.195.659.659 0 01-.247.127 4.809 4.809 0 00-2.49 2.783 5.363 5.363 0 00-.36 2.213 2.572 2.572 0 00.75 1.927 2.489 2.489 0 002.1.563 3.952 3.952 0 002.595-1.245c.307-.33.367-.368.427-.293.06.075.045.12-.067.307a5.625 5.625 0 01-3.203 2.535c-.262.068-.375.12-.375.18 0 .195 1.643-.075 2.64-.427a9.074 9.074 0 005.475-5.595 7.073 7.073 0 00.413-2.79 7.101 7.101 0 00-.128-1.8z"
  }));
}
IQ.DefaultColor = DefaultColor;
var IQ_default = IQ;
//# sourceMappingURL=IQ.js.map
