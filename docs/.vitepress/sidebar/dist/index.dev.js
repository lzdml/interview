"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSidebar = getSidebar;

var _web = _interopRequireDefault(require("./web"));

var _back = _interopRequireDefault(require("./back"));

var _computer = _interopRequireDefault(require("./computer"));

var _messy = _interopRequireDefault(require("./messy"));

var _practice = _interopRequireDefault(require("./practice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getSidebar() {
  return _objectSpread({}, _web["default"], {}, _back["default"], {}, _computer["default"], {}, _messy["default"], {}, _practice["default"]);
}