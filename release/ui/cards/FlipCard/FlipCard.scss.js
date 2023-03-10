'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".FlipCard_root__69ffe596{position:relative;transform-style:preserve-3d}.FlipCard_back__69ffe596,.FlipCard_back__69ffe596:hover,.FlipCard_front__69ffe596{-webkit-backface-visibility:hidden;backface-visibility:hidden}.FlipCard_back__69ffe596,.FlipCard_back__69ffe596:hover{inset:0;position:absolute;transform:rotateX(-180deg) translateZ(-20px)}.FlipCard_flip__69ffe596>.FlipCard_front__69ffe596,.FlipCard_flip__69ffe596>.FlipCard_front__69ffe596:hover{transform:rotateX(180deg) translateZ(-20px)}.FlipCard_flip__69ffe596>.FlipCard_back__69ffe596,.FlipCard_flip__69ffe596>.FlipCard_back__69ffe596:hover{box-shadow:0 0 30px -10px hsla(0,0%,43%,.15);transform:rotateX(0) translateZ(20px)}";
var modules_59301fdb = {"root":"FlipCard_root__69ffe596","front":"FlipCard_front__69ffe596","back":"FlipCard_back__69ffe596","flip":"FlipCard_flip__69ffe596"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_59301fdb;
