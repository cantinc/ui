'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = "@keyframes Navigation_show__a8bf7970{0%{max-height:0}to{max-height:var(--ui-sub-menu-height)}}.Navigation_root__a8bf7970{display:flex;flex:1;flex-direction:column;font-size:32px;gap:4px}.Navigation_submenu__a8bf7970{--ui-sub-menu-height:fit-content;display:flex;flex-direction:column;font-size:75%;gap:4px;max-height:0;min-height:0;overflow:hidden;transition:all .3s;visibility:hidden}.Navigation_link__a8bf7970{text-decoration:none}.Navigation_linkActive__a8bf7970{color:var(--color-link-dark)}.Navigation_linkActive__a8bf7970+.Navigation_submenu__a8bf7970{animation:Navigation_show__a8bf7970 .3s;max-height:-moz-fit-content;max-height:fit-content;min-height:var(--ui-sub-menu-height);visibility:visible}";
var modules_a22eb676 = {"root":"Navigation_root__a8bf7970","submenu":"Navigation_submenu__a8bf7970","link":"Navigation_link__a8bf7970","linkActive":"Navigation_linkActive__a8bf7970","show":"Navigation_show__a8bf7970"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_a22eb676;
