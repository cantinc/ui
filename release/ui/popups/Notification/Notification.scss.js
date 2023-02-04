'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = "@keyframes Notification_show__b053d9e9{0%{opacity:0;transform:translateZ(-200px)}}@keyframes Notification_time__b053d9e9{0%{width:0}to{width:calc(var(--round-20)*2 + 100%)}}.Notification_root__b053d9e9{animation:Notification_show__b053d9e9 .3s;background-color:var(--color-orange);border:2px solid rgba(0,0,0,.2);border-radius:var(--round-50);color:var(--color-100);cursor:pointer;opacity:1;overflow:hidden;padding:0 20px;pointer-events:all;position:absolute;text-align:center;top:10px;transition:all .3s;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:auto;z-index:3}.Notification_root__b053d9e9~.Notification_root__b053d9e9{pointer-events:none}.Notification_root__b053d9e9+.Notification_root__b053d9e9{top:5px;transform:translateZ(-100px);z-index:2}.Notification_root__b053d9e9+.Notification_root__b053d9e9+.Notification_root__b053d9e9{top:0;transform:translateZ(-200px);z-index:1}.Notification_root__b053d9e9+.Notification_root__b053d9e9+.Notification_root__b053d9e9~.Notification_root__b053d9e9{display:none}.Notification_success__b053d9e9{background-color:var(--color-green);color:var(--color-100)}.Notification_error__b053d9e9{background-color:var(--color-red);color:var(--color-100)}.Notification_progress__b053d9e9{background:rgba(0,0,0,.2);border-radius:var(--round-20);bottom:0;box-sizing:border-box;height:8px;left:0;margin:0 calc(var(--round-20)*-1);position:absolute}.Notification_root__b053d9e9:first-child .Notification_progress__b053d9e9{animation:Notification_time__b053d9e9 linear both}.Notification_hidden__b053d9e9{opacity:0;transform:translateZ(100px)}";
var modules_4c9a7c8b = {"root":"Notification_root__b053d9e9","show":"Notification_show__b053d9e9","success":"Notification_success__b053d9e9","error":"Notification_error__b053d9e9","progress":"Notification_progress__b053d9e9","time":"Notification_time__b053d9e9","hidden":"Notification_hidden__b053d9e9"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_4c9a7c8b;
