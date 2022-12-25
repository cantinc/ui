'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".BurgerButton_root__dfbcc7e9{--ui-burger-button-size:16px;--ui-burger-button-width:calc(var(--ui-burger-button-size)*1.5);align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;font-size:var(--ui-burger-button-size);height:var(--ui-burger-button-size);padding:0 0 0 var(--ui-burger-button-width);position:relative}.BurgerButton_root__dfbcc7e9:focus,.BurgerButton_root__dfbcc7e9:hover{color:var(--color-secondary-50)}.BurgerButton_root__dfbcc7e9:focus>.BurgerButton_dash__dfbcc7e9,.BurgerButton_root__dfbcc7e9:hover>.BurgerButton_dash__dfbcc7e9{background:var(--color-secondary-50)}.BurgerButton_root__dfbcc7e9:focus>.BurgerButton_dash__dfbcc7e9:nth-child(2),.BurgerButton_root__dfbcc7e9:focus>.BurgerButton_dash__dfbcc7e9:nth-child(odd),.BurgerButton_root__dfbcc7e9:hover>.BurgerButton_dash__dfbcc7e9:nth-child(2),.BurgerButton_root__dfbcc7e9:hover>.BurgerButton_dash__dfbcc7e9:nth-child(odd){width:var(--ui-burger-button-width)}.BurgerButton_root__dfbcc7e9:focus{outline:none}.BurgerButton_root__dfbcc7e9:active>.BurgerButton_dash__dfbcc7e9{background:var(--color-secondary-30);transition:all .3s}.BurgerButton_root__dfbcc7e9:active>.BurgerButton_dash__dfbcc7e9:nth-child(odd){left:calc(var(--ui-burger-button-width)*.05*-1);width:calc(var(--ui-burger-button-width)*1.1)}.BurgerButton_dash__dfbcc7e9{background:var(--color-10);border-radius:calc(var(--ui-burger-button-size)/12);height:calc(var(--ui-burger-button-size)/6);left:0;position:absolute;transition:all .3s cubic-bezier(0,.4,.4,1.4);width:var(--ui-burger-button-width)}.BurgerButton_dash__dfbcc7e9:first-child{top:0}.BurgerButton_dash__dfbcc7e9:nth-child(3){bottom:0}.BurgerButton_dash__dfbcc7e9:nth-child(2){top:calc(50% - var(--ui-burger-button-size)/12)}.BurgerButton_dash__dfbcc7e9:nth-child(odd){width:calc(var(--ui-burger-button-width)*.7)}.BurgerButton_children__dfbcc7e9{padding-left:calc(var(--ui-burger-button-size)*.5)}.BurgerButton_children__dfbcc7e9:empty{display:none}";
var modules_e90d8779 = {"root":"BurgerButton_root__dfbcc7e9","dash":"BurgerButton_dash__dfbcc7e9","children":"BurgerButton_children__dfbcc7e9"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_e90d8779;
