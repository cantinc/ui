'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = "@keyframes Notification_show__03829baf{0%{opacity:0;transform:translateZ(-200px)}}@keyframes Notification_time__03829baf{0%{width:0}to{width:calc(var(--round-20)*2 + 100%)}}.Notification_root__03829baf{animation:Notification_show__03829baf .3s;background-color:var(--color-warning-50);border:2px solid rgba(0,0,0,.2);border-radius:var(--round-50);color:var(--color-100);cursor:pointer;opacity:1;overflow:hidden;padding:0 20px;pointer-events:all;position:absolute;text-align:center;top:10px;transition:all .3s;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:auto;z-index:3}.Notification_root__03829baf~.Notification_root__03829baf{pointer-events:none}.Notification_root__03829baf+.Notification_root__03829baf{top:5px;transform:translateZ(-100px);z-index:2}.Notification_root__03829baf+.Notification_root__03829baf+.Notification_root__03829baf{top:0;transform:translateZ(-200px);z-index:1}.Notification_root__03829baf+.Notification_root__03829baf+.Notification_root__03829baf~.Notification_root__03829baf{display:none}.Notification_success__03829baf{background-color:var(--color-positive-50);color:var(--color-100)}.Notification_error__03829baf{background-color:var(--color-negative-50);color:var(--color-100)}.Notification_progress__03829baf{background:rgba(0,0,0,.2);border-radius:var(--round-20);bottom:0;box-sizing:border-box;height:8px;left:0;margin:0 calc(var(--round-20)*-1);position:absolute}.Notification_root__03829baf:first-child .Notification_progress__03829baf{animation:Notification_time__03829baf linear both}.Notification_hidden__03829baf{opacity:0;transform:translateZ(100px)}";
var modules_4c9a7c8b = {"root":"Notification_root__03829baf","show":"Notification_show__03829baf","success":"Notification_success__03829baf","error":"Notification_error__03829baf","progress":"Notification_progress__03829baf","time":"Notification_time__03829baf","hidden":"Notification_hidden__03829baf"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_4c9a7c8b;
