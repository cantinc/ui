'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var Flex$1 = require('./Flex.scss.js');

const useStyle = dom.style(Flex$1["default"]);
const alignMap = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    stretch: 'stretch',
};
const justifyMap = Object.assign(Object.assign({}, alignMap), { between: 'space-between', around: 'space-around' });
function Flex(_a = {}) {
    var { vertical, align, justify, gap, flex, wrap, inline, reverse, style, padding, element: Element = 'div' } = _a, props = tslib.__rest(_a, ["vertical", "align", "justify", "gap", "flex", "wrap", "inline", "reverse", "style", "padding", "element"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    return ({type:Element,props:{...props,style:Object.assign(Object.assign({}, style), { '--ui-flex-justify': justify && justify !== 'start' ? justifyMap[justify] : '', '--ui-flex-align': align && align !== 'start' ? alignMap[align] : '', '--ui-flex-wrap': wrap ? 'wrap' : '', '--ui-flex-flex': String(flex === true ? 1 : flex || ''), '--ui-flex': inline ? 'inline-flex' : '', '--ui-flex-direction': vertical ? (reverse ? 'column-reverse' : 'column') : reverse ? 'row-reverse' : '', '--ui-flex-padding': !padding ? '' : Array.isArray(padding) ? `${padding.join('px ')}px` : `${padding}px`, '--ui-flex-gap': !gap ? '' : Array.isArray(gap) ? `${gap[0]}px ${gap[1]}px` : `${gap}px` }),class:() => styles.root},children:[children]});
}

exports.Flex = Flex;
exports.alignMap = alignMap;
exports.justifyMap = justifyMap;
