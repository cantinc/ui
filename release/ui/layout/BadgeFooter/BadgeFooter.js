'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../Flex/index.js');
var BadgeFooter$1 = require('./BadgeFooter.scss.js');
var Flex = require('../Flex/Flex.js');

const useStyle = dom.style(BadgeFooter$1["default"]);
function BadgeFooter(_a = {}) {
    var { offset } = _a, props = tslib.__rest(_a, ["offset"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    return ({type:Flex.Flex,props:{padding:8,justify:'center',...props,style:Object.assign(Object.assign({}, props.style), { '--ui-badge-footer-offset': dom.inject(offset, offset => offset ? `-${offset}px` : '') }),class:() => styles.root},children:[children]});
}

exports.BadgeFooter = BadgeFooter;
