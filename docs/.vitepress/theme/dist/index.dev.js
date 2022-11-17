"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _theme = _interopRequireDefault(require("vitepress/theme"));

var _VueClickAway = _interopRequireDefault(require("../../../components/VueClickAway.vue"));

var _JsTest = _interopRequireDefault(require("../../../components/JsTest.vue"));

var _tCss = _interopRequireDefault(require("../../../components/t-css.vue"));

var _GlobalComponent = _interopRequireDefault(require("../../../components/GlobalComponent.vue"));

var _EndTime = _interopRequireDefault(require("../../../components/EndTime.vue"));

var _SlotContent = _interopRequireDefault(require("../../../components/CssDemo/SlotContent.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _objectSpread({}, _theme["default"], {
  enhanceApp: function enhanceApp(_ref) {
    var app = _ref.app;
    app.component("VueClickAway", _VueClickAway["default"]).component("JsTest", _JsTest["default"]).component("t-css", _tCss["default"]).component("GlobalComponent", _GlobalComponent["default"]).component('EndTime', _EndTime["default"]).component('SlotContent', _SlotContent["default"]);
  }
});

exports["default"] = _default;