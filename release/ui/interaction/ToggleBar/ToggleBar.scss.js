'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".ToggleBar_root__43bbb654{--ui-toggle-bar-index:-1;border:2px solid var(--color-80);border-radius:18px;height:36px;max-width:100%;overflow:auto hidden;position:relative}.ToggleBar_link__43bbb654{align-items:center;border-radius:var(--round-80);color:var(--color-primary-50);cursor:pointer;display:flex;flex:1;flex-direction:column;gap:4px;justify-content:center;margin:2px 0;position:relative;text-decoration:none;transition:color .3s;z-index:1}.ToggleBar_link__43bbb654:hover{color:var(--color-10)}.ToggleBar_link__43bbb654:focus{outline:none}@media (pointer:fine){.ToggleBar_focus__43bbb654{background:var(--color-primary-100);border-radius:15px;inset:2px;left:calc((100% - 4px)/var(--ui-toggle-bar-count)*var(--ui-toggle-bar-focus) + 2px);position:absolute;right:calc((100% - 4px)/var(--ui-toggle-bar-count)*(var(--ui-toggle-bar-count) - var(--ui-toggle-bar-focus) - 1) + 2px)}}.ToggleBar_active__43bbb654,.ToggleBar_active__43bbb654:hover{color:var(--color-100)}.ToggleBar_backFocus__43bbb654 .ToggleBar_focus__43bbb654,.ToggleBar_back__43bbb654 .ToggleBar_selected__43bbb654{transition:right .3s .1s,left .3s,opacity .3s}.ToggleBar_forwardFocus__43bbb654 .ToggleBar_focus__43bbb654,.ToggleBar_forward__43bbb654 .ToggleBar_selected__43bbb654{transition:right .3s,left .3s .1s,opacity .3s}.ToggleBar_selected__43bbb654{background:var(--color-primary-50);border-radius:15px;inset:2px;left:calc((100% - 4px)/var(--ui-toggle-bar-count)*var(--ui-toggle-bar-index) + 2px);position:absolute;right:calc((100% - 4px)/var(--ui-toggle-bar-count)*(var(--ui-toggle-bar-count) - var(--ui-toggle-bar-index) - 1) + 2px)}";
var modules_2eae4ece = {"root":"ToggleBar_root__43bbb654","link":"ToggleBar_link__43bbb654","focus":"ToggleBar_focus__43bbb654","active":"ToggleBar_active__43bbb654","backFocus":"ToggleBar_backFocus__43bbb654","back":"ToggleBar_back__43bbb654","selected":"ToggleBar_selected__43bbb654","forwardFocus":"ToggleBar_forwardFocus__43bbb654","forward":"ToggleBar_forward__43bbb654"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_2eae4ece;
