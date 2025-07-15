'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = "@keyframes Navigation_show__78ef3a43{0%{max-height:0}to{max-height:var(--ui-sub-menu-height)}}.Navigation_root__78ef3a43{display:flex;flex:1;flex-direction:column;font-size:32px;font-weight:900;text-transform:uppercase}.Navigation_submenu__78ef3a43{--ui-sub-menu-height:fit-content;display:flex;flex-direction:column;font-size:75%;font-weight:700;gap:4px;margin-bottom:-8px;margin-top:calc(var(--ui-flex-gap)*-1 + 8px);max-height:0;min-height:0;overflow:hidden;text-transform:none;transition:all .3s;visibility:hidden}.Navigation_link__78ef3a43{color:inherit;text-decoration:none}.Navigation_linkActive__78ef3a43{color:var(--color-primary-50)}.Navigation_linkActive__78ef3a43+.Navigation_submenu__78ef3a43{animation:Navigation_show__78ef3a43 .3s;max-height:-moz-fit-content;max-height:fit-content;min-height:var(--ui-sub-menu-height);visibility:visible}";
var modules_a22eb676 = {"root":"Navigation_root__78ef3a43","submenu":"Navigation_submenu__78ef3a43","link":"Navigation_link__78ef3a43","linkActive":"Navigation_linkActive__78ef3a43","show":"Navigation_show__78ef3a43"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_a22eb676;
