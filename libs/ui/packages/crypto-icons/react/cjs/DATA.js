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
  default: () => DATA_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#E9570F";
function DATA({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M18.109 7.44l1.205-1.196c.285-.282.226-.798-.13-1.152-.357-.354-.878-.411-1.162-.129L15.76 7.206l-.078.077-1.97 1.954a3.42 3.42 0 00-4.4.337 3.348 3.348 0 00-.341 4.363L7.466 15.43a5.884 5.884 0 01-.892-1.72c-.504-1.529-.369-3.203.45-4.583 1.278-2.152 3.563-3.088 5.729-2.814a.802.802 0 00.912-.74.98.98 0 00-.88-1.03 7.528 7.528 0 00-6.087 2.135c-2.752 2.728-2.914 7.057-.495 10.003l-1.38 1.37c-.272.27-.205.775.152 1.129.357.353.867.421 1.139.151L7.6 17.858l1.075-1.065.002-.003 1.741-1.726a3.42 3.42 0 003.69-.732 3.347 3.347 0 00.739-3.66l1.976-1.958c1.448 2.181 1.16 5.2-.833 7.176a5.914 5.914 0 01-4.598 1.71.734.734 0 00-.772.665l-.021.24a.78.78 0 00.743.848 7.729 7.729 0 005.874-2.247c2.698-2.675 3.01-6.796.893-9.668v.001zm-5.251 5.65a1.635 1.635 0 01-2.295 0 1.602 1.602 0 010-2.274 1.634 1.634 0 012.295 0 1.601 1.601 0 010 2.274z"
  }));
}
DATA.DefaultColor = DefaultColor;
var DATA_default = DATA;
//# sourceMappingURL=DATA.js.map
