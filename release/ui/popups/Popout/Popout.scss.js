'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".Popout_root__64643755{background:var(--ui-popout-background);border:var(--ui-popout-border);border-radius:var(--ui-popout-radius);box-sizing:border-box;height:var(--ui-popout-height);left:var(--ui-popout-left);opacity:0;overflow:hidden;pointer-events:none;position:fixed;top:var(--ui-popout-top);transition:all .1s;width:var(--ui-popout-width)}.Popout_preshow__64643755{opacity:1}.Popout_show__64643755{border:0 solid transparent;border-radius:0;height:100%;left:0;pointer-events:all;top:0;transition:all .3s,border-radius .3s ease-in;width:100%}.Popout_show__64643755 .Popout_content__64643755{left:0;opacity:1;top:0}.Popout_hide__64643755{border:var(--ui-popout-border);border-radius:var(--ui-popout-radius);height:var(--ui-popout-height);left:var(--ui-popout-left);opacity:0;top:var(--ui-popout-top);transition:all .3s,border-radius .3s ease-out,opacity .3s .3s;width:var(--ui-popout-width)}.Popout_content__64643755,.Popout_hide__64643755 .Popout_content__64643755{left:calc(var(--ui-popout-left)*-1);opacity:0;top:calc(var(--ui-popout-top)*-1)}.Popout_content__64643755{background:var(--color-100);box-sizing:border-box;height:100vh;overflow:auto;position:absolute;transition:all .3s;width:100vw}";
var modules_f03e01a5 = {"root":"Popout_root__64643755","preshow":"Popout_preshow__64643755","show":"Popout_show__64643755","content":"Popout_content__64643755","hide":"Popout_hide__64643755"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_f03e01a5;