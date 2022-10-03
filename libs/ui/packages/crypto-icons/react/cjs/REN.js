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
  default: () => REN_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#080817";
function REN({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M7.106 7.366l1.173-.676.166.273 4.35-2.513-.32-.19-.321-.177L12 3.988 4.9 8.09v.177L6.94 7.093l.167.273zm0 2.583l3.412-1.967.154.274 4.362-2.514-.319-.19-.32-.177-.155-.095-9.34 5.38v.19L6.94 9.677l.167.272zm0 1.292l4.527-2.618.153.272 4.363-2.512-.32-.179-.322-.19-.153-.095-10.453 6.034v.188l2.038-1.184.167.284zm0 1.28L12.78 9.25l.156.275 4.327-2.501-.322-.18-.32-.187-.154-.085-11.567 6.674v.177l2.038-1.173.167.273zm0 1.292l6.79-3.922.155.285 4.327-2.5-.323-.191-.305-.179-.167-.094-12.682 7.325v.177l2.038-1.173.167.272zm11.756-5.866l-.165-.095L4.9 15.828v.177l2.038-1.173.167.273 6.79-3.923.155.273L19.1 8.552V8.09l-.237-.143zM5.778 16.79l1.138-.652.166.273 6.78-3.923.165.283 5.072-2.94V8.92L5.624 16.695l.154.094zm8.084-3.01l.165.285 5.072-2.94v-.913L6.738 17.346l.153.095 1.163-.676.164.272 5.643-3.258zM8.005 18.08l1.173-.675.153.285 4.53-2.62.164.271 5.073-2.926v-.924L7.851 17.986l.155.095zm1.126.64l1.162-.664.153.273 3.415-1.968.165.272 5.072-2.927v-.924L8.966 18.638l.166.082zm.948.557l.166.095 1.162-.677.153.285 2.3-1.327.165.274 5.073-2.93v-.922l-9.019 5.202zm1.28.734l1.163-.663.164.272 1.175-.687.165.285 5.072-2.929v-.924l-7.894 4.564.155.082zM13.92 5.09l-.32-.177-.32-.19-.165-.095L4.9 9.38v.177l2.038-1.173.167.272L9.404 7.33l.156.272 4.36-2.513z"
  }));
}
REN.DefaultColor = DefaultColor;
var REN_default = REN;
//# sourceMappingURL=REN.js.map
