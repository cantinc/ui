'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".Dots_root__5bc0c07e{position:relative}.Dots_dotProgress__5bc0c07e,.Dots_dot__5bc0c07e{align-items:center;border-radius:calc(var(--ui-dots-size)/2);box-sizing:border-box;display:flex;flex:1;justify-content:center;min-height:var(--ui-dots-size);min-width:var(--ui-dots-size);white-space:nowrap}.Dots_dotProgress__5bc0c07e:not(:empty),.Dots_dot__5bc0c07e:not(:empty){padding:4px 8px}.Dots_dot__5bc0c07e{background:var(--color-90);cursor:pointer;transition:background-color .6s}.Dots_active__5bc0c07e{background:var(--color-primary-100)}.Dots_dotProgress__5bc0c07e{background:var(--color-primary-50);color:var(--color-100)}.Dots_progress__5bc0c07e{-webkit-clip-path:inset(0 calc(100%*(1 - var(--ui-dots-progress))) 0 var(--ui-dots-left));clip-path:inset(0 calc(100%*(1 - var(--ui-dots-progress))) 0 var(--ui-dots-left));inset:0;pointer-events:none;position:absolute;transition:-webkit-clip-path var(--ui-dots-transition) linear;transition:clip-path var(--ui-dots-transition) linear;transition:clip-path var(--ui-dots-transition) linear,-webkit-clip-path var(--ui-dots-transition) linear}";
var modules_1352abc8 = {"root":"Dots_root__5bc0c07e","dot":"Dots_dot__5bc0c07e","dotProgress":"Dots_dotProgress__5bc0c07e","active":"Dots_active__5bc0c07e","progress":"Dots_progress__5bc0c07e"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_1352abc8;
