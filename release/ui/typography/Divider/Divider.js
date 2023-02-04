'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var Divider$1 = require('./Divider.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyles = dom.style(Divider$1["default"]);
function Divider(_a = {}) {
    var { vertical } = _a, props = tslib.__rest(_a, ["vertical"]);
    const children = jsx.useChildren();
    const styles = useStyles();
    if (!children) {
        return ({type:'hr',props:{...props,class:() => classes__default["default"]([
                styles.root,
                dom.use(vertical) && styles.vertical,
            ])}});
    }
    return ({type:'fieldset',props:{class:() => classes__default["default"]([
            styles.root,
            dom.use(vertical) && styles.vertical,
        ])},children:[{type:'legend',props:{class:() => styles.legend},children:[children]}]});
}

exports.Divider = Divider;
