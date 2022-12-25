'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = "@keyframes Spin_spin__7be2a82c{0%{transform:translateY(0)}10%{transform:translateY(-50%)}20%{transform:translateY(0)}30%{transform:translateY(50%)}40%{transform:translateY(0)}to{transform:translateY(0)}}.Spin_root__7be2a82c{opacity:0;padding:10px 0;transition:opacity .3s}.Spin_show__7be2a82c{opacity:1}.Spin_hide__7be2a82c{opacity:0}.Spin_point__7be2a82c{animation:Spin_spin__7be2a82c 2s linear infinite;background:#fff;border:2px solid #333;border-radius:50%;display:block;height:16px;width:16px}.Spin_point__7be2a82c:nth-child(2){animation-delay:.2s}.Spin_point__7be2a82c:nth-child(3){animation-delay:.4s}";
var modules_6ac9fe02 = {"root":"Spin_root__7be2a82c","show":"Spin_show__7be2a82c","hide":"Spin_hide__7be2a82c","point":"Spin_point__7be2a82c","spin":"Spin_spin__7be2a82c"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_6ac9fe02;
