'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../Flex/index.js');
var Aside$1 = require('./Aside.scss.js');
var Flex = require('../Flex/Flex.js');

const useStyles = dom.style(Aside$1["default"]);
function Aside(_a = {}) {
    var { style = '', width = 320 } = _a, props = tslib.__rest(_a, ["style", "width"]);
    const children = jsx.useChildren();
    const styles = useStyles();
    return ({type:Flex.Flex,props:{element:'aside',align:'stretch',...props,style:() => `--ui-aside-width:${width}px;${dom.use(style)}`,class:() => styles.root},children:[children]});
}

exports.Aside = Aside;
