'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = "@keyframes Navigation_show__ca10bf47{0%{max-height:0}to{max-height:var(--ui-sub-menu-height)}}.Navigation_root__ca10bf47{display:flex;flex:1;flex-direction:column;font-size:32px;font-style:italic;font-weight:900;text-transform:uppercase}.Navigation_submenu__ca10bf47{--ui-sub-menu-height:fit-content;display:flex;flex-direction:column;font-size:75%;font-weight:700;gap:4px;margin-bottom:-8px;margin-top:calc(var(--ui-flex-gap)*-1 + 8px);max-height:0;min-height:0;overflow:hidden;text-transform:none;transition:all .3s;visibility:hidden}.Navigation_link__ca10bf47{color:inherit;text-decoration:none}.Navigation_linkActive__ca10bf47{color:var(--color-secondary-50)}.Navigation_linkActive__ca10bf47+.Navigation_submenu__ca10bf47{animation:Navigation_show__ca10bf47 .3s;max-height:-moz-fit-content;max-height:fit-content;min-height:var(--ui-sub-menu-height);visibility:visible}";
var modules_a22eb676 = {"root":"Navigation_root__ca10bf47","submenu":"Navigation_submenu__ca10bf47","link":"Navigation_link__ca10bf47","linkActive":"Navigation_linkActive__ca10bf47","show":"Navigation_show__ca10bf47"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_a22eb676;
