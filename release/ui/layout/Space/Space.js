'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var Space$1 = require('./Space.scss.js');

const useStyles = dom.style(Space$1["default"]);
function Space(_a = {}) {
    var { flex = 1, style, gap } = _a, props = tslib.__rest(_a, ["flex", "style", "gap"]);
    const styles = useStyles();
    return ({type:'span',props:{...props,style:Object.assign(Object.assign({}, style), { 'min-width': dom.inject(gap, gap => gap ? `${gap}px` : ''), 'min-height': dom.inject(gap, gap => gap ? `${gap}px` : ''), '--ui-space-flex': flex }),class:() => styles.root}});
}

exports.Space = Space;
