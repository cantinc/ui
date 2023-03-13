'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".Drawer_root__da7a0e78{background:var(--color-surface-gray);border:1px solid var(--color-90);box-shadow:0 0 10px 1px rgba(34,34,34,.15);box-sizing:border-box;cursor:default;opacity:0;position:absolute;transform:var(--ui-drawer-transform);transition:opacity .3s,transform .3s}.Drawer_bottom__da7a0e78,.Drawer_top__da7a0e78{height:var(--ui-drawer-size);max-height:var(--window-height);width:100%}.Drawer_left__da7a0e78,.Drawer_right__da7a0e78{height:100%;width:100%}@media (min-width:480px){.Drawer_left__da7a0e78,.Drawer_right__da7a0e78{width:var(--ui-drawer-size)}}.Drawer_bottom__da7a0e78,.Drawer_left__da7a0e78,.Drawer_top__da7a0e78{left:0}.Drawer_left__da7a0e78,.Drawer_right__da7a0e78,.Drawer_top__da7a0e78{top:0}.Drawer_bottom__da7a0e78{--ui-drawer-transform:translateY(30%);bottom:0}.Drawer_right__da7a0e78{--ui-drawer-transform:translate(30%);left:0}@media (min-width:480px){.Drawer_right__da7a0e78{left:calc(100% - var(--ui-drawer-size))}}.Drawer_top__da7a0e78{--ui-drawer-transform:translateY(-30%)}.Drawer_left__da7a0e78{--ui-drawer-transform:translate(-30%)}.Drawer_show__da7a0e78{opacity:1;transform:translate(0)}.Drawer_touch__da7a0e78{--ui-drawer-touth-offset:400;--ui-drawer-touch:calc(min(var(--ui-drawer-touch-hide), var(--ui-drawer-touth-offset))/var(--ui-drawer-touth-offset));opacity:calc(1 - var(--ui-drawer-touch));transition:none}.Drawer_touch__da7a0e78.Drawer_left__da7a0e78{--ui-drawer-touch-transform:calc(-30%*var(--ui-drawer-touch));transform:translateX(var(--ui-drawer-touch-transform))}.Drawer_touch__da7a0e78.Drawer_right__da7a0e78{--ui-drawer-touch-transform:calc(30%*var(--ui-drawer-touch));transform:translateX(var(--ui-drawer-touch-transform))}.Drawer_touch__da7a0e78.Drawer_top__da7a0e78{--ui-drawer-touch-transform:calc(-30%*var(--ui-drawer-touch));transform:translateY(var(--ui-drawer-touch-transform))}.Drawer_touch__da7a0e78.Drawer_bottom__da7a0e78{--ui-drawer-touch-transform:calc(30%*var(--ui-drawer-touch));transform:translateY(var(--ui-drawer-touch-transform))}.Drawer_hide__da7a0e78{opacity:0;transform:var(--ui-drawer-transform)}.Drawer_content__da7a0e78{box-sizing:border-box;height:100%;overflow:auto;width:100%}";
var modules_649c3d85 = {"root":"Drawer_root__da7a0e78","top":"Drawer_top__da7a0e78","bottom":"Drawer_bottom__da7a0e78","right":"Drawer_right__da7a0e78","left":"Drawer_left__da7a0e78","show":"Drawer_show__da7a0e78","touch":"Drawer_touch__da7a0e78","hide":"Drawer_hide__da7a0e78","content":"Drawer_content__da7a0e78"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_649c3d85;
