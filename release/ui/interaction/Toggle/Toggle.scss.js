'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".Toggle_input__091ed230{cursor:inherit;opacity:0;position:absolute}.Toggle_disabled__091ed230{color:var(--color-70);pointer-events:none}.Toggle_icon__091ed230{background:var(--color-80);border:2px solid var(--color-80);border-radius:12px;display:inline-block;height:20px;pointer-events:none;position:relative;transition:all .3s;width:34px}.Toggle_root__091ed230:hover .Toggle_icon__091ed230{background:var(--color-70);border-color:var(--color-70)}.tab .Toggle_input__091ed230:focus+.Toggle_icon__091ed230{border-color:var(--color-warning-50)}.Toggle_checked__091ed230 .Toggle_icon__091ed230{background:var(--color-primary-50);border-color:var(--color-primary-50)}.Toggle_checked__091ed230:hover .Toggle_icon__091ed230{background:var(--color-primary-40);border-color:var(--color-primary-40)}.Toggle_disabled__091ed230 .Toggle_icon__091ed230{background:var(--color-90);border-color:var(--color-90)}.Toggle_disabled__091ed230.Toggle_checked__091ed230 .Toggle_icon__091ed230{background:var(--color-primary-100);border-color:var(--color-primary-100)}.Toggle_icon__091ed230:before{background:var(--color-100);border-radius:7px;bottom:3px;content:\"\";display:block;left:3px;position:absolute;right:17px;top:3px;transition:right .3s .1s,left .3s,background .3s}.Toggle_disabled__091ed230 .Toggle_icon__091ed230:before{background:var(--color-80)}.Toggle_disabled__091ed230.Toggle_checked__091ed230 .Toggle_icon__091ed230:before{background:var(--color-primary-90)}.Toggle_root__091ed230:not(.Toggle_checked__091ed230) .Toggle_input__091ed230:active~.Toggle_icon__091ed230:before,.Toggle_root__091ed230:not(.Toggle_checked__091ed230):active .Toggle_icon__091ed230:before{right:10px;transition:right .3s .1s,left .3s,background .3s}.Toggle_checked__091ed230>.Toggle_icon__091ed230:before{left:17px;right:3px;transition:right .3s,left .3s .1s,background .3s}.Toggle_checked__091ed230>.Toggle_input__091ed230:active~.Toggle_icon__091ed230:before,.Toggle_root__091ed230:active.Toggle_checked__091ed230>.Toggle_icon__091ed230:before{left:10px;transition:right .3s,left .3s .1s,background .3s}";
var modules_88cd194b = {"input":"Toggle_input__091ed230","disabled":"Toggle_disabled__091ed230","icon":"Toggle_icon__091ed230","root":"Toggle_root__091ed230","checked":"Toggle_checked__091ed230"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_88cd194b;
