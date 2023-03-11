'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = ".FlipCard_root__6024c9d6{--ui-flip-card-rotation1:-179deg;--ui-flip-card-rotation2:179deg;position:relative}.FlipCard_revert__6024c9d6{--ui-flip-card-rotation1:179deg;--ui-flip-card-rotation2:-179deg}.FlipCard_vertical__6024c9d6{--ui-flip-card-animation1:rotateX(var(--ui-flip-card-rotation1));--ui-flip-card-animation2:rotateX(var(--ui-flip-card-rotation2))}.FlipCard_horizontal__6024c9d6{--ui-flip-card-animation1:rotateY(var(--ui-flip-card-rotation1));--ui-flip-card-animation2:rotateY(var(--ui-flip-card-rotation2))}.FlipCard_back__6024c9d6,.FlipCard_back__6024c9d6:hover,.FlipCard_front__6024c9d6{-webkit-backface-visibility:hidden;backface-visibility:hidden}.FlipCard_back__6024c9d6,.FlipCard_back__6024c9d6:hover{inset:0;position:absolute;transform:var(--ui-flip-card-animation1) translateZ(-20px)}.FlipCard_flip__6024c9d6>.FlipCard_front__6024c9d6,.FlipCard_flip__6024c9d6>.FlipCard_front__6024c9d6:hover{transform:var(--ui-flip-card-animation2) translateZ(-20px)}.FlipCard_flip__6024c9d6>.FlipCard_back__6024c9d6,.FlipCard_flip__6024c9d6>.FlipCard_back__6024c9d6:hover{box-shadow:0 0 30px -10px hsla(0,0%,43%,.15);transform:rotate(0) translateZ(20px)}";
var modules_59301fdb = {"root":"FlipCard_root__6024c9d6","revert":"FlipCard_revert__6024c9d6","vertical":"FlipCard_vertical__6024c9d6","horizontal":"FlipCard_horizontal__6024c9d6","front":"FlipCard_front__6024c9d6","back":"FlipCard_back__6024c9d6","flip":"FlipCard_flip__6024c9d6"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_59301fdb;
