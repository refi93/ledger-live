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
  default: () => ATOM_default
});
var React = __toModule(require("react"));
var import_StyledSvg = __toModule(require("./StyledSvg"));
const DefaultColor = "#2E3148";
function ATOM({
  size = 16,
  color = DefaultColor
}) {
  return /* @__PURE__ */ React.createElement(import_StyledSvg.default, {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12.015 4.147c-.971 0-1.759 3.523-1.759 7.868 0 4.345.788 7.867 1.759 7.867.97 0 1.758-3.522 1.758-7.867 0-4.345-.787-7.868-1.758-7.868zm.121 15.29c-.11.15-.222.038-.222.038-.447-.519-.67-1.481-.67-1.481-.783-2.518-.597-7.923-.597-7.923.367-4.29 1.037-5.305 1.264-5.53a.139.139 0 01.178-.014c.33.235.608 1.213.608 1.213.817 3.036.743 5.886.743 5.886.074 2.48-.41 5.257-.41 5.257-.372 2.11-.893 2.555-.893 2.555z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.838 8.1c-.483-.843-3.93.227-7.7 2.39-3.77 2.162-6.43 4.597-5.947 5.44.484.843 3.93-.227 7.7-2.39 3.771-2.162 6.431-4.598 5.948-5.44zM5.636 15.814c-.184-.023-.142-.176-.142-.176.226-.645.95-1.318.95-1.318 1.794-1.932 6.576-4.46 6.576-4.46 3.904-1.816 5.117-1.74 5.425-1.656a.139.139 0 01.101.149c-.037.402-.75 1.13-.75 1.13-2.224 2.22-4.734 3.576-4.734 3.576-2.115 1.299-4.765 2.26-4.765 2.26-2.016.726-2.66.495-2.66.495z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.821 15.958c.488-.84-2.165-3.287-5.923-5.466-3.758-2.178-7.203-3.261-7.69-2.42-.487.842 2.166 3.288 5.925 5.466 3.76 2.178 7.201 3.261 7.688 2.42zM5.531 8.397c-.072-.171.08-.212.08-.212.673-.128 1.618.162 1.618.162 2.57.585 7.153 3.457 7.153 3.457 3.529 2.469 4.07 3.557 4.151 3.865a.139.139 0 01-.077.161c-.367.169-1.354-.082-1.354-.082-3.037-.815-5.466-2.306-5.466-2.306-2.183-1.178-4.341-2.99-4.341-2.99-1.64-1.38-1.763-2.054-1.763-2.054l-.002-.001h.001z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.996 12.922a.925.925 0 100-1.851.925.925 0 000 1.85zM15.791 9.192a.75.75 0 100-1.5.75.75 0 000 1.5zM6.98 11.08a.75.75 0 100-1.5.75.75 0 000 1.5zM10.904 17.892a.75.75 0 100-1.5.75.75 0 000 1.5z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 4.133c-.971 0-1.759 3.522-1.759 7.867 0 4.345.788 7.867 1.759 7.867.97 0 1.758-3.522 1.758-7.867 0-4.345-.788-7.867-1.758-7.867zm.121 15.29c-.11.148-.222.037-.222.037-.447-.519-.67-1.481-.67-1.481-.783-2.518-.597-7.923-.597-7.923.367-4.29 1.036-5.305 1.264-5.53a.139.139 0 01.178-.014c.33.235.608 1.213.608 1.213.817 3.036.743 5.886.743 5.886.074 2.48-.41 5.257-.41 5.257-.372 2.11-.894 2.555-.894 2.555z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.823 8.085c-.483-.843-3.93.227-7.7 2.39-3.77 2.162-6.43 4.597-5.947 5.44.483.843 3.93-.227 7.7-2.39 3.77-2.162 6.431-4.598 5.948-5.44zM5.621 15.799c-.184-.023-.142-.176-.142-.176.226-.645.95-1.318.95-1.318 1.794-1.931 6.576-4.46 6.576-4.46 3.904-1.816 5.117-1.74 5.425-1.656a.14.14 0 01.1.149c-.037.402-.75 1.13-.75 1.13-2.224 2.22-4.733 3.576-4.733 3.576-2.115 1.299-4.765 2.26-4.765 2.26-2.016.726-2.66.495-2.66.495z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.806 15.943c.488-.84-2.165-3.287-5.923-5.466-3.758-2.178-7.203-3.261-7.69-2.42-.488.843 2.166 3.287 5.925 5.466 3.76 2.178 7.201 3.261 7.688 2.42zM5.516 8.382c-.073-.171.08-.212.08-.212.672-.128 1.617.163 1.617.163 2.57.585 7.154 3.456 7.154 3.456 3.529 2.469 4.07 3.557 4.151 3.865a.14.14 0 01-.077.161c-.368.169-1.354-.082-1.354-.082-3.037-.815-5.467-2.306-5.467-2.306-2.182-1.178-4.34-2.99-4.34-2.99-1.64-1.38-1.763-2.054-1.763-2.054l-.002-.001h.001z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.981 12.907a.926.926 0 100-1.851.926.926 0 000 1.85zM15.776 9.177a.75.75 0 100-1.5.75.75 0 000 1.5zM6.964 11.066a.75.75 0 100-1.5.75.75 0 000 1.5zM10.89 17.877a.75.75 0 100-1.5.75.75 0 000 1.5z"
  }));
}
ATOM.DefaultColor = DefaultColor;
var ATOM_default = ATOM;
//# sourceMappingURL=ATOM.js.map
