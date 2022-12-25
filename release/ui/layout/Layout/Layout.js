'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../Flex/index.js');
var Layout$1 = require('./Layout.scss.js');
var Flex = require('../Flex/Flex.js');

const useStyles = dom.style(Layout$1["default"]);
function Layout(_a = {}) {
    var { width, style = '' } = _a, props = tslib.__rest(_a, ["width", "style"]);
    const children = jsx.useChildren();
    const styles = useStyles();
    return ({type:Flex.Flex,props:{flex:true,align:'stretch',...props,class:() => styles.root,style:() => `${width ? `--ui-layout-width:${width}px;` : ''}${dom.use(style)}`},children:[children]});
}

exports.Layout = Layout;
