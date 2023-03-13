'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = "@keyframes Flex_skeleton__aec85067{0%{background-position:70%}30%{background-position:100%}31%{background-position:0}to{background-position:70%}}.Flex_root__aec85067{--ui-flex:flex;--ui-flex-flex:none;--ui-flex-gap:none;--ui-flex-wrap:nowrap;--ui-flex-direction:row;--ui-flex-align:flex-start;--ui-flex-justify:flex-start;--ui-flex-padding:0;--ui-flex-loading-offset:0;align-items:var(--ui-flex-align);box-sizing:border-box;display:var(--ui-flex);flex:var(--ui-flex-flex);flex-direction:var(--ui-flex-direction);flex-wrap:var(--ui-flex-wrap);gap:var(--ui-flex-gap);justify-content:var(--ui-flex-justify);padding:var(--ui-flex-padding)}.Flex_root__aec85067:after{animation:Flex_skeleton__aec85067 2s linear infinite reverse;background-attachment:fixed;background-image:linear-gradient(95deg,var(--ui-skeleton-color-base) 0,var(--ui-skeleton-color-base) 45%,var(--ui-skeleton-color-shine) 50%,var(--ui-skeleton-color-base) 55%,var(--ui-skeleton-color-base) 100%);background-position:70%;background-repeat:repeat;background-size:500%;border-radius:inherit;content:\"\";display:block;inset:calc(var(--ui-flex-loading-offset)*-1);opacity:0;pointer-events:none;position:absolute;transition:opacity .3s}.Flex_loading__aec85067{cursor:default}.Flex_loading__aec85067:after{opacity:1}";
var modules_2cda96fd = {"root":"Flex_root__aec85067","skeleton":"Flex_skeleton__aec85067","loading":"Flex_loading__aec85067"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_2cda96fd;
