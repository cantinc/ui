'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".Calendar_root__64dc926e{-webkit-user-select:none;-moz-user-select:none;user-select:none}.Calendar_week__64dc926e{border-bottom:1px solid var(--ui-color-separator);display:grid;grid-template-columns:repeat(7,1fr);margin-top:8px;padding-bottom:16px}.Calendar_weekCell__64dc926e{text-align:center}.Calendar_weekCell__64dc926e:nth-child(6),.Calendar_weekCell__64dc926e:nth-child(7){color:var(--color-negative-50)}.Calendar_gridWrapper__64dc926e{height:calc(var(--ui-calendar-cell-height)*6);overflow:hidden}.Calendar_grid__64dc926e{display:grid;grid-template-columns:repeat(7,1fr);position:relative;transition:top .3s}.Calendar_cell__64dc926e{align-items:center;color:var(--color-50);display:flex;height:var(--ui-calendar-cell-height);justify-content:center;transition:background-color .3s,color .3s}.Calendar_cell__64dc926e:hover{background:var(--color-surface-purple)}.Calendar_cellCurrent__64dc926e{color:var(--color-10)}.Calendar_active__64dc926e{background:var(--color-surface-purple)}.Calendar_active__64dc926e:hover{background:var(--color-primary-100)}.Calendar_disabled__64dc926e{background:var(--color-90);color:var(--color-70);pointer-events:none}.Calendar_selected__64dc926e{background:var(--color-primary-70);color:var(--color-100)}.Calendar_selected__64dc926e:hover{background:var(--color-primary-50);color:var(--color-100)}.Calendar_today__64dc926e{border:1px solid var(--color-primary-70);box-sizing:border-box}";
var modules_dc28a286 = {"root":"Calendar_root__64dc926e","week":"Calendar_week__64dc926e","weekCell":"Calendar_weekCell__64dc926e","gridWrapper":"Calendar_gridWrapper__64dc926e","grid":"Calendar_grid__64dc926e","cell":"Calendar_cell__64dc926e","cellCurrent":"Calendar_cellCurrent__64dc926e","active":"Calendar_active__64dc926e","disabled":"Calendar_disabled__64dc926e","selected":"Calendar_selected__64dc926e","today":"Calendar_today__64dc926e"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_dc28a286;
