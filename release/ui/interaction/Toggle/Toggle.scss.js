'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".Toggle_input__71384575{cursor:inherit;opacity:0;position:absolute}.Toggle_disabled__71384575{color:var(--color-70);pointer-events:none}.Toggle_icon__71384575{background:var(--color-80);border:2px solid var(--color-80);border-radius:12px;display:inline-block;height:20px;pointer-events:none;position:relative;transition:all .3s;width:34px}@media (pointer:fine){.Toggle_root__71384575:hover .Toggle_icon__71384575{background:var(--color-70);border-color:var(--color-70)}}.tab .Toggle_input__71384575:focus+.Toggle_icon__71384575{border-color:var(--color-warning-50)}.Toggle_checked__71384575 .Toggle_icon__71384575{background:var(--color-primary-50);border-color:var(--color-primary-50)}@media (pointer:fine){.Toggle_checked__71384575:hover .Toggle_icon__71384575{background:var(--color-primary-40);border-color:var(--color-primary-40)}}.Toggle_disabled__71384575 .Toggle_icon__71384575{background:var(--color-90);border-color:var(--color-90)}.Toggle_disabled__71384575.Toggle_checked__71384575 .Toggle_icon__71384575{background:var(--color-primary-100);border-color:var(--color-primary-100)}.Toggle_icon__71384575:before{background:var(--color-100);border-radius:7px;bottom:3px;content:\"\";display:block;left:3px;position:absolute;right:17px;top:3px;transition:right .3s .1s,left .3s,background .3s}.Toggle_disabled__71384575 .Toggle_icon__71384575:before{background:var(--color-80)}.Toggle_disabled__71384575.Toggle_checked__71384575 .Toggle_icon__71384575:before{background:var(--color-primary-90)}.Toggle_root__71384575:not(.Toggle_checked__71384575) .Toggle_input__71384575:active~.Toggle_icon__71384575:before,.Toggle_root__71384575:not(.Toggle_checked__71384575):active .Toggle_icon__71384575:before{right:10px;transition:right .3s .1s,left .3s,background .3s}.Toggle_checked__71384575>.Toggle_icon__71384575:before{left:17px;right:3px;transition:right .3s,left .3s .1s,background .3s}.Toggle_checked__71384575>.Toggle_input__71384575:active~.Toggle_icon__71384575:before,.Toggle_root__71384575:active.Toggle_checked__71384575>.Toggle_icon__71384575:before{left:10px;transition:right .3s,left .3s .1s,background .3s}";
var modules_88cd194b = {"input":"Toggle_input__71384575","disabled":"Toggle_disabled__71384575","icon":"Toggle_icon__71384575","root":"Toggle_root__71384575","checked":"Toggle_checked__71384575"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_88cd194b;
