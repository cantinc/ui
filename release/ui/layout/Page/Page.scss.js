'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".Page_root__ddb72a9b{max-width:100%;opacity:0;transition:all .3s}.Page_show__ddb72a9b{opacity:1}.Page_hide__ddb72a9b{opacity:0}.Page_title__ddb72a9b{animation:Page_show__ddb72a9b .3s;transform:translateX(50px);transition:all .3s}.Page_show__ddb72a9b .Page_title__ddb72a9b{transform:translateX(0)}.Page_hide__ddb72a9b .Page_title__ddb72a9b{transform:translateX(-50px)}";
var modules_1f74907c = {"root":"Page_root__ddb72a9b","show":"Page_show__ddb72a9b","hide":"Page_hide__ddb72a9b","title":"Page_title__ddb72a9b"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_1f74907c;
