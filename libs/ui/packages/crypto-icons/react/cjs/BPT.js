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
  default: () => BPT_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#0F63D8";
function BPT({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M19.413 15.553a5.146 5.146 0 01-.238.435c-.058.104-.113.207-.174.305-.027.046-.05.093-.078.138h-.009a8.172 8.172 0 01-11.469 2.434c-.037-.025-.07-.053-.106-.078a5.264 5.264 0 01-.412-.295c-.21-.16-.41-.331-.6-.513a7.298 7.298 0 01-.266-.26c-.093-.095-.174-.187-.269-.295a9.277 9.277 0 01-.277-.327 7.338 7.338 0 01-.205-.274 8.57 8.57 0 01-.265-.386 7.522 7.522 0 01-.158-.261 7.114 7.114 0 01-.366-.696c-.07-.15-.135-.3-.197-.453-.038-.094-.071-.19-.105-.286-.052-.15-.103-.307-.147-.454-.03-.106-.049-.208-.082-.317a7.795 7.795 0 01-.1-.443c-.015-.112-.04-.23-.05-.337a9.048 9.048 0 01-.055-.443c-.01-.116-.023-.232-.023-.35-.012-.146-.012-.294-.012-.442 0-.112.009-.225.009-.338a8.286 8.286 0 01.658-2.88c.017-.041.037-.091.048-.125a.255.255 0 01.06-.1c.077-.166.162-.33.252-.494.043-.092.095-.182.148-.27.038-.065.063-.125.113-.196.048-.071.104-.145.154-.218a7.458 7.458 0 01.5-.667c.178-.211.367-.413.566-.606.074-.069.146-.139.221-.205.202-.173.41-.34.623-.5l.431-.295a5.7 5.7 0 01.236-.147 7.953 7.953 0 011.476-.69 7.92 7.92 0 011.134-.313 9.1 9.1 0 01.762-.116c.167-.018.335-.03.504-.037.092-.008.185-.008.278-.008.266-.003.533.008.799.032a7.92 7.92 0 011.602.307c.158.045.306.094.453.148.11.04.222.083.33.128.083.035.167.061.25.098v.012a8.172 8.172 0 014.103 10.99c-.015.031-.033.057-.047.088zM8.871 18.928v-.001a7.61 7.61 0 009.588-2.95c.054-.09.105-.183.156-.275.07-.135.15-.265.218-.412a7.565 7.565 0 00-3.966-10.322 5.844 5.844 0 00-.295-.116 8.494 8.494 0 00-.718-.22 7.423 7.423 0 00-1.195-.203l-.253-.018a10.525 10.525 0 00-.485-.011h-.253a8.056 8.056 0 00-.746.069 6.84 6.84 0 00-.742.142 6.99 6.99 0 00-.728.218 5.794 5.794 0 00-.306.115 8.74 8.74 0 00-.645.294c-.214.111-.423.231-.627.36-.137.086-.27.177-.4.275a3.61 3.61 0 00-.2.147c-.197.155-.386.32-.567.494a7.963 7.963 0 00-.801.911c-.156.21-.302.426-.437.65-.049.08-.093.161-.139.242a7.648 7.648 0 00-.596 1.393c-.082.243-.149.491-.2.743-.032.158-.059.317-.08.476-.013.092-.026.185-.034.276-.015.148-.032.295-.032.443-.009.1-.009.202-.009.304 0 .14.012.28.012.42.013.243.038.486.074.727.02.101.036.197.054.306.027.139.06.278.093.416.024.094.048.189.075.285.042.142.089.282.14.423.03.085.06.172.094.258.056.141.117.279.175.424.038.081.075.163.117.242.073.135.144.267.22.398.051.082.098.161.149.24.076.121.16.24.244.358.062.085.107.156.189.253.081.098.173.203.252.295.08.091.168.19.247.273.08.082.142.14.245.238.174.169.358.327.55.474a7.6 7.6 0 001.562.946zm3.114-.619a6.313 6.313 0 116.309-6.316 6.321 6.321 0 01-6.309 6.316zm0-10.558a4.245 4.245 0 102.997 1.243 4.25 4.25 0 00-2.997-1.246v.003z"
  }));
}
BPT.DefaultColor = DefaultColor;
var BPT_default = BPT;
//# sourceMappingURL=BPT.js.map
