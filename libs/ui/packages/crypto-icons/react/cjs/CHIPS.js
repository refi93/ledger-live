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
  default: () => CHIPS_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#598182";
function CHIPS({
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
    d: "M10.911 19.055l1.902-2.457c.712.11 1.413.048 2.084-.243.242-.105.459-.269.687-.407.032-.02.062-.045.087-.064l2.304 2.279c-.192.127-.381.265-.583.384-.78.452-1.641.75-2.534.877a7.85 7.85 0 01-1.592.06 8.933 8.933 0 01-2.355-.429zm-.724-.282a7.485 7.485 0 01-.747-.385 6.714 6.714 0 01-2.783-3.113 7.481 7.481 0 01-.59-2.145 9.242 9.242 0 01-.047-1.73c.093-1.482.543-2.843 1.452-4.04.838-1.106 1.94-1.863 3.242-2.348a7.245 7.245 0 011.924-.443c.497-.043 1-.085 1.497-.064.307.013.61.043.907.09l-1.929 2.8a3.968 3.968 0 00-1.807.613c-.998.633-1.595 1.545-1.875 2.67a5.43 5.43 0 00-.162 1.45c.006.257.028.508.066.753l-.23.336c-.187.27.042.627.373.583l.084-.01a4.72 4.72 0 00.893 1.526c.252.29.533.532.842.727l-1.083 2.619a.367.367 0 00-.027.112zM15.769 4.75a6.14 6.14 0 011.872.856c.104.07.198.153.297.23.019.015.038.028.062.044-.031.036-.05.06-.071.081-.683.674-1.368 1.345-2.049 2.02-.075.076-.122.088-.213.023a3.21 3.21 0 00-.9-.447l.962-2.531.025-.065a.366.366 0 00.015-.211zm-2.778 8.21l-3.565.467 5.931-8.613.033.015-2.291 6.024 4.181-.66-6.674 8.632-.032-.022 2.417-5.842z"
  }));
}
CHIPS.DefaultColor = DefaultColor;
var CHIPS_default = CHIPS;
//# sourceMappingURL=CHIPS.js.map
