'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".Dropdown_root__82e1d702{background:var(--color-100);border:1px solid var(--color-primary-50);border-radius:var(--round-50);max-height:320px;opacity:0;overflow:hidden auto;position:absolute;transform:translateY(-8px);transition:opacity .3s,transform .3s;z-index:var(--ui-over-z-index)}.Dropdown_root__82e1d702:empty{display:none}.Dropdown_show__82e1d702{opacity:1;transform:translateY(0)}.Dropdown_hide__82e1d702{opacity:0;pointer-events:none;transform:translateY(8px)}";
var modules_aa06803e = {"root":"Dropdown_root__82e1d702","show":"Dropdown_show__82e1d702","hide":"Dropdown_hide__82e1d702"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_aa06803e;
