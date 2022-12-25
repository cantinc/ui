'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var classes = require('html-classes');
var Arrow$1 = require('./Arrow.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Arrow$1["default"]);
function Arrow(_a = {}) {
    var { direction = 'down', style = '', color, size = 18 } = _a, props = tslib.__rest(_a, ["direction", "style", "color", "size"]);
    const styles = useStyle();
    const getColor = () => {
        const currentColor = dom.use(color);
        return currentColor ? `--ui-arrow-color:${currentColor};` : '';
    };
    return ({type:'span',props:{...props,style:() => `${getColor()}--ui-arrow-size:${dom.use(size)}px${dom.use(style)}`,class:() => classes__default["default"]([
            styles.root,
            styles[dom.use(direction)],
        ])}});
}

exports.Arrow = Arrow;
