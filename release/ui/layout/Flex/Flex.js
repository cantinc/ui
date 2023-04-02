'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var Flex$1 = require('./Flex.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Flex$1["default"]);
const alignJustifyMap = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    stretch: 'stretch',
};
const alignMap = Object.assign(Object.assign({}, alignJustifyMap), { baseline: 'baseline' });
const justifyMap = Object.assign(Object.assign({}, alignMap), { between: 'space-between', around: 'space-around' });
function Flex(_a = {}) {
    var { vertical, align, justify, gap, flex, wrap, inline, reverse, style, padding, element: Element = 'div', loading, loadingOffset = 0 } = _a, props = tslib.__rest(_a, ["vertical", "align", "justify", "gap", "flex", "wrap", "inline", "reverse", "style", "padding", "element", "loading", "loadingOffset"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    return ({type:Element,props:{...props,style:Object.assign(Object.assign({}, style), { '--ui-flex-justify': justify && justify !== 'start' ? justifyMap[justify] : '', '--ui-flex-align': align && align !== 'start' ? alignMap[align] : '', '--ui-flex-wrap': wrap ? 'wrap' : '', '--ui-flex-flex': String(flex === true ? 1 : flex || ''), '--ui-flex': inline ? 'inline-flex' : '', '--ui-flex-direction': dom.inject(vertical, vertical => vertical ? (reverse ? 'column-reverse' : 'column') : reverse ? 'row-reverse' : ''), '--ui-flex-padding': !padding ? '' : Array.isArray(padding) ? `${padding.join('px ')}px` : `${padding}px`, '--ui-flex-gap': !gap ? '' : Array.isArray(gap) ? `${gap[0]}px ${gap[1]}px` : `${gap}px`, '--ui-flex-loading-offset': () => `${dom.use(loadingOffset)}px` }),class:() => classes__default["default"]([
            styles.root,
            loading && styles.load,
            dom.use(loading) && styles.loading,
        ])},children:[{type:'hide',props:{when:loading},children:[children]}]});
}

exports.Flex = Flex;
exports.alignJustifyMap = alignJustifyMap;
exports.alignMap = alignMap;
exports.justifyMap = justifyMap;
