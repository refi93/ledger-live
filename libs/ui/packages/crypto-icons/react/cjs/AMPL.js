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
  default: () => AMPL_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#000";
function AMPL({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M5.633 18.375a4.706 4.706 0 01-.001-.532c.06-.018.121-.03.184-.037.182-.031.361-.073.538-.126.048-.014.096-.031.142-.049a1.43 1.43 0 00.594-.427c.108-.133.203-.276.284-.427.114-.207.215-.421.304-.64.181-.441.361-.883.54-1.327l1.845-4.57a305.03 305.03 0 001.715-4.356c.011-.03.024-.059.037-.089.207-.057.41-.115.622-.17l.034.082.713 1.951a689.366 689.366 0 002.454 6.64c.228.604.458 1.208.69 1.81.091.246.198.486.321.718.054.1.113.196.176.29.192.294.492.507.838.594.186.049.375.085.565.11l.136.02c.02.059.007.116.009.172.002.057 0 .12 0 .18.002.06 0 .117-.003.175l-.05.008h-4.772a.12.12 0 01-.01-.032v-.48a.097.097 0 01.005-.02c.04-.011.08-.019.121-.023.197-.025.39-.062.582-.111.077-.021.152-.048.227-.075a.804.804 0 00.108-.053c.189-.103.264-.265.248-.472a1.566 1.566 0 00-.05-.278c-.038-.142-.09-.28-.14-.417-.988-2.701-1.966-5.406-2.933-8.115-.01-.03-.013-.063-.044-.089-.01.006-.023.01-.03.019a.185.185 0 00-.018.044c-.473 1.332-.976 2.653-1.478 3.975-.37.979-.74 1.957-1.085 2.945-.138.396-.271.793-.401 1.192-.051.152-.089.309-.113.467a1.117 1.117 0 00-.009.32.5.5 0 00.207.35.97.97 0 00.25.126c.14.048.286.085.433.109.163.03.327.052.491.077l.035.006a.153.153 0 01.008.036v.464a.145.145 0 01-.006.027.472.472 0 01-.045.007H5.633v.001z"
  }));
}
AMPL.DefaultColor = DefaultColor;
var AMPL_default = AMPL;
//# sourceMappingURL=AMPL.js.map
