'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../../layout/index.js');
var InfoField$1 = require('./InfoField.scss.js');
var Flex = require('../../layout/Flex/Flex.js');

const useStyle = dom.style(InfoField$1["default"]);
function InfoField(_a) {
    var { label, value } = _a, props = tslib.__rest(_a, ["label", "value"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    return ({type:Flex.Flex,props:{wrap:true,...props,class:() => styles.root},children:[{type:'show',props:{when:label},children:[{type:'div',props:{class:() => styles.label},children:[label]}]},value,' ',children]});
}

exports.InfoField = InfoField;
