'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".ToggleBar_root__208cd2e4{--ui-toggle-bar-index:-1;--ui-toggle-bar-inset:0px;--ui-toggle-bar-width:100%;--ui-toggle-bar-inset-2:calc(var(--ui-toggle-bar-inset)*2);border:2px solid var(--color-primary-50);border-radius:500px;max-width:100%;min-height:36px;overflow:auto hidden;position:relative;width:var(--ui-toggle-bar-width)}.ToggleBar_link__208cd2e4{align-items:center;border-radius:500px;color:var(--color-primary-50);cursor:pointer;display:flex;flex:1;flex-direction:column;gap:4px;justify-content:center;margin:2px 0;position:relative;text-decoration:none;transition:color .3s;z-index:1}.ToggleBar_link__208cd2e4:hover{color:var(--color-10)}.ToggleBar_link__208cd2e4:focus{outline:none}@media (pointer:fine){.ToggleBar_focus__208cd2e4{background:var(--color-primary-100);border-radius:500px;inset:var(--ui-toggle-bar-inset);left:calc((100% - var(--ui-toggle-bar-inset-2))/var(--ui-toggle-bar-count)*var(--ui-toggle-bar-focus) + var(--ui-toggle-bar-inset));position:absolute;right:calc((100% - var(--ui-toggle-bar-inset-2))/var(--ui-toggle-bar-count)*(var(--ui-toggle-bar-count) - var(--ui-toggle-bar-focus) - 1) + var(--ui-toggle-bar-inset))}}.ToggleBar_active__208cd2e4,.ToggleBar_active__208cd2e4:hover{color:var(--color-100)}.ToggleBar_backFocus__208cd2e4 .ToggleBar_focus__208cd2e4,.ToggleBar_back__208cd2e4 .ToggleBar_selected__208cd2e4{transition:right .3s .1s,left .3s,opacity .3s}.ToggleBar_forwardFocus__208cd2e4 .ToggleBar_focus__208cd2e4,.ToggleBar_forward__208cd2e4 .ToggleBar_selected__208cd2e4{transition:right .3s,left .3s .1s,opacity .3s}.ToggleBar_selected__208cd2e4{background:var(--color-primary-50);border-radius:500px;inset:var(--ui-toggle-bar-inset);left:calc((100% - var(--ui-toggle-bar-inset-2))/var(--ui-toggle-bar-count)*var(--ui-toggle-bar-index) + var(--ui-toggle-bar-inset));position:absolute;right:calc((100% - var(--ui-toggle-bar-inset-2))/var(--ui-toggle-bar-count)*(var(--ui-toggle-bar-count) - var(--ui-toggle-bar-index) - 1) + var(--ui-toggle-bar-inset))}";
var modules_2eae4ece = {"root":"ToggleBar_root__208cd2e4","link":"ToggleBar_link__208cd2e4","focus":"ToggleBar_focus__208cd2e4","active":"ToggleBar_active__208cd2e4","backFocus":"ToggleBar_backFocus__208cd2e4","back":"ToggleBar_back__208cd2e4","selected":"ToggleBar_selected__208cd2e4","forwardFocus":"ToggleBar_forwardFocus__208cd2e4","forward":"ToggleBar_forward__208cd2e4"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_2eae4ece;
