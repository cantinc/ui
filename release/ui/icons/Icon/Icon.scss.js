'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = "@keyframes Icon_skeleton__6637917a{0%{background-position:70%}30%{background-position:100%}31%{background-position:0}to{background-position:70%}}.Icon_loading__6637917a{border-radius:500px;cursor:default;display:inline-flex;height:var(--ui-icon-size,16px);position:relative;width:var(--ui-icon-size,16px)}.Icon_loading__6637917a:after{animation:Icon_skeleton__6637917a 2s linear infinite reverse;background-attachment:fixed;background-image:linear-gradient(95deg,var(--ui-skeleton-color-base) 0,var(--ui-skeleton-color-base) 45%,var(--ui-skeleton-color-shine) 50%,var(--ui-skeleton-color-base) 55%,var(--ui-skeleton-color-base) 100%);background-position:70%;background-repeat:repeat;background-size:500%;border-radius:inherit;content:\"\";display:block;inset:0;opacity:0;opacity:1;pointer-events:none;position:absolute;transition:opacity .3s}";
var modules_e7b1950f = {"loading":"Icon_loading__6637917a","skeleton":"Icon_skeleton__6637917a"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_e7b1950f;
