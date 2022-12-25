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
    let customStyle = '';
    if (inline) {
        customStyle = '--ui-flex:inline-flex;';
    }
    if (gap) {
        if (Array.isArray(gap)) {
            customStyle = `--ui-flex-gap:${gap[0]}px ${gap[1]}px;${customStyle}`;
        }
        else {
            customStyle = `--ui-flex-gap:${gap}px;${customStyle}`;
        }
    }
    if (padding) {
        if (Array.isArray(padding)) {
            customStyle = `--ui-flex-padding:${padding.join('px ')}px;${customStyle}`;
        }
        else {
            customStyle = `--ui-flex-padding:${padding}px;${customStyle}`;
        }
    }
    if (flex) {
        customStyle = `--ui-flex-flex:${flex === true ? 1 : flex};${customStyle}`;
    }
    if (wrap) {
        customStyle = `--ui-flex-wrap:wrap;${customStyle}`;
    }
    if (vertical) {
        customStyle = `--ui-flex-direction:${reverse ? 'column-reverse' : 'column'};${customStyle}`;
    }
    else if (reverse) {
        customStyle = `--ui-flex-direction:row-reverse;${customStyle}`;
    }
    if (align && align !== 'start') {
        customStyle = `--ui-flex-align:${alignMap[align]};${customStyle}`;
    }
    if (justify && justify !== 'start') {
        customStyle = `--ui-flex-justify:${justifyMap[justify]};${customStyle}`;
    }
    return ({type:Element,props:{...props,style:() => `${customStyle}${dom.use(style || '')}`,class:() => styles.root},children:[children]});
}

exports.Flex = Flex;
exports.alignMap = alignMap;
exports.justifyMap = justifyMap;
