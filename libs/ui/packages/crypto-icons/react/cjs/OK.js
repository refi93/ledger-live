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
  default: () => OK_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#000";
function OK({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M20.984 10.495v.048c-1.04.651-2.088 1.295-3.133 1.944a.136.136 0 00-.044.057c.279.075.567.13.832.252.245.11.495.25.633.489.132.241.165.525.091.79-.04.197-.122.383-.197.572-.314.751-.629 1.5-.94 2.255a.438.438 0 01-.06.104c-.103-.002-.201-.04-.302-.063-.507-.125-1.017-.248-1.524-.375-.165-.046-.334-.073-.497-.127.005-.103.063-.19.098-.283l.696-1.666c.052-.115.083-.26.008-.372-.094-.16-.282-.221-.449-.267-.612-.157-1.228-.303-1.842-.455-.087-.019-.173-.059-.265-.047-.054.095-.086.201-.13.303-.26.612-.51 1.228-.77 1.84-.038.086-.06.18-.117.255-.102 0-.198-.04-.296-.063-.525-.129-1.049-.26-1.575-.388-.148-.04-.303-.065-.449-.115a.353.353 0 01.027-.12l2.65-6.353a.136.136 0 01.042-.054c.092.006.18.043.27.064.446.107.893.221 1.34.33.232.06.47.107.7.176.012.043-.01.087-.026.129-.18.41-.345.825-.52 1.234l-.54 1.3c-.061.151-.14.298-.183.458.079-.027.145-.073.213-.12l3.53-2.212c.065-.04.123-.094.197-.113.107-.008.21.033.312.056.36.078.714.18 1.071.263.387.086.767.193 1.15.274zm-8.328-1.274c.019.378-.125.737-.273 1.076-.399.958-.802 1.914-1.199 2.873-.144.338-.27.691-.49.99a1.381 1.381 0 01-.63.49c-.32.1-.658.125-.989.072-.57-.072-1.125-.225-1.683-.36-.757-.19-1.52-.373-2.278-.564-.503-.12-1.01-.25-1.479-.48a1.24 1.24 0 01-.496-.436.835.835 0 01-.12-.518c.04-.332.163-.648.297-.952l1.222-2.936c.098-.225.183-.458.309-.67.107-.196.25-.371.42-.516.2-.153.437-.251.687-.287.183-.016.367-.007.55-.003.569.084 1.132.201 1.686.352.777.188 1.552.385 2.328.572.357.088.712.178 1.061.297.233.086.472.173.677.321.232.151.38.402.4.68zm-2.715.668c.015-.11-.063-.204-.156-.252-.187-.102-.4-.14-.605-.192-.541-.135-1.083-.269-1.627-.4a1.082 1.082 0 00-.476-.03c-.184.052-.276.238-.338.4-.308.732-.608 1.464-.917 2.193a.929.929 0 00-.075.263c0 .105.073.196.162.24.135.069.28.107.423.145l1.69.415c.197.046.404.096.605.053.168-.055.255-.228.317-.38l.829-1.989c.065-.15.148-.298.17-.465H9.94z"
  }));
}
OK.DefaultColor = DefaultColor;
var OK_default = OK;
//# sourceMappingURL=OK.js.map
