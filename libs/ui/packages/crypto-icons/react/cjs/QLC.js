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
  default: () => QLC_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#610089";
function QLC({
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
    d: "M12.368 3.752c3.847.207 6.961 2.877 7.725 6.651.1.498.128 1.013.156 1.523.024.45-.269.754-.675.753-.397 0-.657-.288-.667-.735-.073-3.29-2.295-6.004-5.504-6.69-.48-.102-.98-.104-1.471-.16a.662.662 0 01-.61-.693c.01-.36.28-.63.656-.648.13-.006.26 0 .39 0zm-.719 16.498c-3.692-.111-7.013-2.91-7.714-6.534-.106-.555-.147-1.124-.183-1.689-.023-.345.197-.592.517-.675a.633.633 0 01.71.297c.067.128.1.29.102.438.055 3.153 2.187 5.866 5.247 6.621.552.137 1.134.158 1.704.219.326.034.587.255.63.572.042.3-.147.636-.435.707-.185.046-.385.031-.578.044zm.34-11.252c1.632-.005 3.003 1.333 3.014 2.944.004.554-.505.904-.975.665-.255-.13-.364-.345-.375-.632a1.652 1.652 0 00-1.4-1.6 1.643 1.643 0 00-1.872 1.308c-.172.886.383 1.75 1.247 1.936.119.026.24.04.36.047.402.02.684.297.681.675-.003.382-.305.666-.715.67-1.287.01-2.5-.928-2.851-2.206-.524-1.909.91-3.801 2.885-3.807zm5.665 2.818c-.015.127-.01.287-.056.43-.097.302-.42.478-.735.427-.328-.054-.56-.323-.565-.69-.005-.56-.096-1.103-.325-1.61-.76-1.677-2.06-2.576-3.903-2.663-.45-.022-.75-.287-.747-.69.004-.403.305-.667.763-.665 2.752.005 5.157 2.135 5.506 4.878.024.185.04.37.062.582zM6.36 12.16c-.039-.305.04-.606.388-.766.46-.213.94.116.949.655a4.313 4.313 0 001.815 3.473 4.284 4.284 0 002.374.784c.582.015.92.437.735.915-.103.27-.331.427-.643.424-1.652-.015-3.044-.634-4.158-1.847a5.494 5.494 0 01-1.46-3.637zm8.65 2.115c-.028.335-.142.548-.394.665-.25.117-.505.1-.705-.086a20.32 20.32 0 01-1.051-1.048c-.233-.248-.21-.64.018-.886.232-.25.648-.301.902-.068.377.343.733.71 1.08 1.085.092.099.117.259.15.337v.001z"
  }));
}
QLC.DefaultColor = DefaultColor;
var QLC_default = QLC;
//# sourceMappingURL=QLC.js.map
