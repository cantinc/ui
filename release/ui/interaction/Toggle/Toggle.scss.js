'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".Toggle_input__981aecc1{cursor:inherit;opacity:0;position:absolute}.Toggle_disabled__981aecc1{color:var(--color-70);pointer-events:none}.Toggle_icon__981aecc1{background:var(--color-80);border:2px solid var(--color-80);border-radius:12px;display:inline-block;height:20px;pointer-events:none;position:relative;transition:all .3s;width:34px}.Toggle_root__981aecc1:hover .Toggle_icon__981aecc1{background:var(--color-70);border-color:var(--color-70)}.tab .Toggle_input__981aecc1:focus+.Toggle_icon__981aecc1{border-color:var(--color-warning-50)}.Toggle_checked__981aecc1 .Toggle_icon__981aecc1{background:var(--color-primary-50);border-color:var(--color-primary-50)}.Toggle_checked__981aecc1:hover .Toggle_icon__981aecc1{background:var(--color-primary-40);border-color:var(--color-primary-40)}.Toggle_disabled__981aecc1 .Toggle_icon__981aecc1{background:var(--color-90);border-color:var(--color-90)}.Toggle_disabled__981aecc1.Toggle_checked__981aecc1 .Toggle_icon__981aecc1{background:var(--color-primary-100);border-color:var(--color-primary-100)}.Toggle_icon__981aecc1:before{background:var(--color-100);border-radius:7px;bottom:3px;content:\"\";display:block;left:3px;position:absolute;right:17px;top:3px;transition:right .3s .1s,left .3s,background .3s}.Toggle_disabled__981aecc1 .Toggle_icon__981aecc1:before{background:var(--color-80)}.Toggle_disabled__981aecc1.Toggle_checked__981aecc1 .Toggle_icon__981aecc1:before{background:var(--color-primary-90)}.Toggle_input__981aecc1:active~.Toggle_icon__981aecc1:before,.Toggle_root__981aecc1:active .Toggle_icon__981aecc1:before{right:10px;transition:right .3s,left .3s .1s,background .3s}.Toggle_input__981aecc1:checked~.Toggle_icon__981aecc1:before{left:17px;right:3px;transition:right .3s,left .3s .1s,background .3s}.Toggle_input__981aecc1:checked:active~.Toggle_icon__981aecc1:before,.Toggle_root__981aecc1:active .Toggle_input__981aecc1:checked~.Toggle_icon__981aecc1:before{left:10px;transition:right .3s .1s,left .3s,background .3s}";
var modules_88cd194b = {"input":"Toggle_input__981aecc1","disabled":"Toggle_disabled__981aecc1","icon":"Toggle_icon__981aecc1","root":"Toggle_root__981aecc1","checked":"Toggle_checked__981aecc1"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_88cd194b;
