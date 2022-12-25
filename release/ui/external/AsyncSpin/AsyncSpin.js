'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
require('../../layout/Spin/index.js');
var Spin = require('../../layout/Spin/Spin.js');

function AsyncSpin(_a = {}) {
    var { hide = 300, show = 0 } = _a, props = tslib.__rest(_a, ["hide", "show"]);
    return ({type:'delay',props:{show:show,hide:hide},children:[{type:Spin.Spin,props:{...props}}]});
}

exports.AsyncSpin = AsyncSpin;
