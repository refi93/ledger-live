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
  default: () => ZRX_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#302C2C";
function ZRX({
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
    d: "M11.623 20.25c-.203-.021-.405-.04-.608-.064a8.16 8.16 0 01-3.091-1.023c-.015-.007-.027-.018-.055-.037 1.654-1.238 3.301-2.468 4.957-3.705l.499.485c.277.271.557.54.829.815.067.068.116.067.195.026a5.363 5.363 0 002.046-1.792l.08-.119c.023.027.045.05.063.073.575.767 1.15 1.533 1.727 2.297.05.067.044.105-.009.166-1.337 1.519-2.999 2.455-5.002 2.775-.252.04-.508.056-.762.084-.034.003-.068.012-.1.019h-.77zm.727-16.5c.14.014.28.03.42.042a8.188 8.188 0 013.317 1.05c.015.009.028.02.053.038L11.1 8.494l-.195-.185c-.354-.345-.71-.69-1.061-1.038-.056-.055-.099-.061-.17-.026a5.36 5.36 0 00-2.077 1.818l-.075.112L5.672 6.71c.187-.197.36-.395.546-.577a8.18 8.18 0 014.337-2.246c.323-.059.652-.078.978-.117.037-.003.074-.012.11-.019h.707zM4.844 7.9l3.746 4.912-.756.775c-.188.193-.375.388-.567.578-.054.054-.056.095-.023.16a5.35 5.35 0 001.895 2.13c.004.004.006.011.02.037l-2.446 1.834c-1.462-1.259-2.411-2.81-2.792-4.693-.408-2.014-.077-3.917.924-5.732h-.001zm10.631 3.278l.689-.715c.192-.2.38-.401.577-.595.062-.061.061-.107.025-.179a5.353 5.353 0 00-1.837-2.098l-.103-.073 2.46-1.845c1.392 1.192 2.317 2.662 2.742 4.436.53 2.214.058 4.404-.86 5.946l-3.693-4.877z"
  }));
}
ZRX.DefaultColor = DefaultColor;
var ZRX_default = ZRX;
//# sourceMappingURL=ZRX.js.map
