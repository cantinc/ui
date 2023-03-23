'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".Alert_root__a2d591a1{border-radius:var(--round-60);bottom:24px;color:var(--color-100);margin:0 auto;max-height:0;max-width:100%;opacity:0;overflow:hidden;padding:0;position:sticky;top:24px;transform:scale(1.5);transform-origin:center;transition:all .3s;width:360px;z-index:calc(var(--ui-over-z-index) + 1)}.Alert_show__a2d591a1{margin:12px auto;max-height:200px;opacity:1;padding:var(--ui-flex-padding);transform:scale(1)}.Alert_hide__a2d591a1{margin:0 auto;max-height:0;opacity:0;padding:0;transform:scale(.5)}.Alert_error__a2d591a1{background:var(--color-negative-50)}.Alert_warning__a2d591a1{background:var(--color-warning-50)}.Alert_success__a2d591a1{background:var(--color-positive-50)}";
var modules_9dbc385c = {"root":"Alert_root__a2d591a1","show":"Alert_show__a2d591a1","hide":"Alert_hide__a2d591a1","error":"Alert_error__a2d591a1","warning":"Alert_warning__a2d591a1","success":"Alert_success__a2d591a1"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_9dbc385c;
