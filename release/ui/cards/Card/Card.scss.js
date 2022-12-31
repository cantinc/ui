'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector_8363bc92 = require('rollup-plugin-styles/dist/runtime/inject-css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var injector_8363bc92__default = /*#__PURE__*/_interopDefaultLegacy(injector_8363bc92);

var css = "@keyframes Card_skeleton__c449d39a{0%{background-position:70%}30%{background-position:100%}31%{background-position:0}to{background-position:70%}}.Card_root__c449d39a{background-color:var(--color-100);border:1px solid var(--color-70);border-radius:var(--round-50);box-shadow:0 0 30px -10px hsla(0,0%,43%,0);max-width:100%;opacity:0;padding:18px;text-decoration:none;transform:translateZ(50px);transition:all .3s}.Card_root__c449d39a:after{animation:Card_skeleton__c449d39a 2s linear infinite reverse;background-attachment:fixed;background-image:linear-gradient(95deg,var(--ui-skeleton-color-base) 0,var(--ui-skeleton-color-base) 45%,var(--ui-skeleton-color-shine) 50%,var(--ui-skeleton-color-base) 55%,var(--ui-skeleton-color-base) 100%);background-repeat:repeat;background-size:500%;border-radius:inherit;content:\"\";display:block;inset:-1px;opacity:0;pointer-events:none;position:absolute;transition:opacity .3s}.Card_show__c449d39a{box-shadow:0 0 0 0 hsla(0,0%,43%,.5);opacity:1;transform:translateZ(0)}.Card_show__c449d39a:nth-child(odd){transition:all .3s .1s}.Card_show__c449d39a:nth-child(3n){transition:all .3s .2s}.Card_shown__c449d39a:nth-child(1n){transition:all .3s}.Card_hide__c449d39a{opacity:0;transform:translateZ(50px)}.Card_hide__c449d39a:nth-child(odd){transition:all .1s}.Card_hide__c449d39a:nth-child(3n){transition:all .2s}.Card_loading__c449d39a{cursor:default}.Card_loading__c449d39a:after{opacity:1}.Card_clickable__c449d39a{cursor:pointer;transition:all .3s;-webkit-user-select:none;-moz-user-select:none;user-select:none}.Card_clickable__c449d39a:hover{box-shadow:0 0 30px -10px hsla(0,0%,43%,.15);transform:translateZ(10px)}.Card_clickable__c449d39a:active{transform:translateZ(20px);transition:all .2s}";
var modules_8c949659 = {"root":"Card_root__c449d39a","skeleton":"Card_skeleton__c449d39a","show":"Card_show__c449d39a","shown":"Card_shown__c449d39a","hide":"Card_hide__c449d39a","loading":"Card_loading__c449d39a","clickable":"Card_clickable__c449d39a"};
injector_8363bc92__default["default"](css,{});

exports.css = css;
exports["default"] = modules_8c949659;
