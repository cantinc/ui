'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".Popout_root__ae1a0e79{background:var(--ui-popout-background);border:var(--ui-popout-border);border-radius:var(--ui-popout-radius);box-sizing:border-box;height:var(--ui-popout-height);left:var(--ui-popout-left);opacity:0;overflow:hidden;pointer-events:none;position:fixed;top:var(--ui-popout-top);transition:all .1s;width:var(--ui-popout-width);z-index:var(--ui-over-z-index)}.Popout_preshow__ae1a0e79{opacity:1}.Popout_show__ae1a0e79{border:0 solid transparent;border-radius:0;height:var(--window-height);left:0;pointer-events:all;top:0;transition:all .3s,border-radius .3s ease-in;width:100%}.Popout_show__ae1a0e79 .Popout_content__ae1a0e79{left:0;opacity:1;top:0}.Popout_touch__ae1a0e79{border-radius:calc(var(--ui-popout-touch-hide)/2);height:calc(var(--window-height) - var(--ui-popout-touch-hide));left:calc(var(--ui-popout-touch-hide)/2);top:calc(var(--ui-popout-touch-hide)/2);transition:none;width:calc(100% - var(--ui-popout-touch-hide))}.Popout_touch__ae1a0e79 .Popout_content__ae1a0e79{left:calc(var(--ui-popout-touch-hide)/-2);top:calc(var(--ui-popout-touch-hide)/-2);transition:none}.Popout_hide__ae1a0e79{border:var(--ui-popout-border);border-radius:var(--ui-popout-radius);height:var(--ui-popout-height);left:var(--ui-popout-left);opacity:0;top:var(--ui-popout-top);transition:all .3s,border-radius .3s ease-out,opacity .3s .3s;width:var(--ui-popout-width)}.Popout_content__ae1a0e79,.Popout_hide__ae1a0e79 .Popout_content__ae1a0e79{left:calc(var(--ui-popout-left)*-1);opacity:0;top:calc(var(--ui-popout-top)*-1)}.Popout_content__ae1a0e79{background:var(--color-100);box-sizing:border-box;height:var(--window-height);overflow:auto;position:absolute;transition:all .3s;width:100vw}";
var modules_f03e01a5 = {"root":"Popout_root__ae1a0e79","preshow":"Popout_preshow__ae1a0e79","show":"Popout_show__ae1a0e79","content":"Popout_content__ae1a0e79","touch":"Popout_touch__ae1a0e79","hide":"Popout_hide__ae1a0e79"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_f03e01a5;
