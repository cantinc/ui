'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../Flex/index.js');
var Image$1 = require('./Image.scss.js');
var Flex = require('../Flex/Flex.js');

const useStyle = dom.style(Image$1["default"]);
function Image(_a) {
    var { src, size, ratio = 1, radius = 8, style } = _a, props = tslib.__rest(_a, ["src", "size", "ratio", "radius", "style"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    return ({type:Flex.Flex,props:{...props,style:Object.assign(Object.assign({}, style), { '--ui-image-ratio': dom.inject(ratio, ratio => Array.isArray(ratio) ? `${ratio[0]} / ${ratio[1]}` : String(ratio)), '--ui-image-radius': dom.inject(radius, radius => typeof radius === 'number' ? `${radius}px` : radius), '--ui-image-size': dom.inject(size, size => `${size}px`), 'background-image': dom.inject(src, src => `url("${src}")`) }),class:() => styles.root},children:[children]});
}

exports.Image = Image;
