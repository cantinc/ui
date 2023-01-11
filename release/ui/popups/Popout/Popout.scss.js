'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".Popout_root__6787f32e{background:var(--ui-popout-background);border:var(--ui-popout-border);border-radius:var(--ui-popout-radius);box-sizing:border-box;height:var(--ui-popout-height);left:var(--ui-popout-left);opacity:0;overflow:hidden;pointer-events:none;position:fixed;top:var(--ui-popout-top);transition:all .1s;width:var(--ui-popout-width);z-index:var(--ui-over-z-index)}.Popout_preshow__6787f32e{opacity:1}.Popout_show__6787f32e{border:0 solid transparent;border-radius:0;height:var(--window-height);left:0;pointer-events:all;top:0;transition:all .3s,border-radius .3s ease-in;width:100%}.Popout_show__6787f32e .Popout_content__6787f32e{left:0;opacity:1;top:0}.Popout_touch__6787f32e{--ui-popout-touth-offset:600;--ui-popout-touch:calc(min(var(--ui-popout-touch-hide), var(--ui-popout-touth-offset))/var(--ui-popout-touth-offset));border-radius:calc(var(--ui-popout-touch)*var(--ui-popout-radius));height:calc(100%*(1 - var(--ui-popout-touch)) + var(--ui-popout-touch)*var(--ui-popout-height));left:calc(var(--ui-popout-touch)*var(--ui-popout-left));top:calc(var(--ui-popout-touch)*var(--ui-popout-top));transition:none;width:calc(100%*(1 - var(--ui-popout-touch)) + var(--ui-popout-touch)*var(--ui-popout-width))}.Popout_touch__6787f32e .Popout_content__6787f32e{left:calc(var(--ui-popout-touch)*var(--ui-popout-left)*-1);opacity:calc(1 - var(--ui-popout-touch));top:calc(var(--ui-popout-touch)*var(--ui-popout-top)*-1);transition:none}.Popout_hide__6787f32e{border:var(--ui-popout-border);border-radius:var(--ui-popout-radius);height:var(--ui-popout-height);left:var(--ui-popout-left);opacity:0;top:var(--ui-popout-top);transition:all .3s,border-radius .3s ease-out,opacity .3s .3s;width:var(--ui-popout-width)}.Popout_content__6787f32e,.Popout_hide__6787f32e .Popout_content__6787f32e{left:calc(var(--ui-popout-left)*-1);opacity:0;top:calc(var(--ui-popout-top)*-1);transition:all .3s}.Popout_content__6787f32e{background:var(--color-100);box-sizing:border-box;height:var(--window-height);overflow:auto;position:absolute;width:100vw}";
var modules_f03e01a5 = {"root":"Popout_root__6787f32e","preshow":"Popout_preshow__6787f32e","show":"Popout_show__6787f32e","content":"Popout_content__6787f32e","touch":"Popout_touch__6787f32e","hide":"Popout_hide__6787f32e"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_f03e01a5;
