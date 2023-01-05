'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
require('../../layout/index.js');
var Browser$1 = require('./Browser.scss.js');
var Flex = require('../../layout/Flex/Flex.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Browser$1["default"]);
function Browser(_a = {}) {
    var { height = 'auto' } = _a, props = tslib.__rest(_a, ["height"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    return ({type:'div',props:{...props,class:() => styles.root},children:[{type:Flex.Flex,props:{padding:8,gap:8},children:[{type:'span',props:{class:() => classes__default["default"]([styles.point, styles.pointClose])}},{type:'span',props:{class:() => classes__default["default"]([styles.point, styles.pointHide])}},{type:'span',props:{class:() => classes__default["default"]([styles.point, styles.pointFull])}}]},{type:'div',props:{style:{
            '--ui-iframe-height': typeof height === 'string' ? height : `${height}px`,
        },class:() => styles.content},children:[children]}]});
}

exports.Browser = Browser;
