'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../Flex/index.js');
var Content$1 = require('./Content.scss.js');
var Flex = require('../Flex/Flex.js');

const useStyles = dom.style(Content$1["default"]);
function Content(_a = {}) {
    var { width, style } = _a, props = tslib.__rest(_a, ["width", "style"]);
    const children = jsx.useChildren();
    const styles = useStyles();
    return ({type:Flex.Flex,props:{align:'stretch',...props,style:Object.assign(Object.assign({}, style), { '--ui-content-width': dom.inject(width, width => width ? `${width}px` : '') }),class:() => styles.root},children:[children]});
}

exports.Content = Content;
