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
    var { style = '', src, ratio = 1, size, radius = 8 } = _a, props = tslib.__rest(_a, ["style", "src", "ratio", "size", "radius"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    const newStyle = () => {
        const currentRatio = dom.use(ratio);
        const currentRadius = dom.use(radius);
        const ratioStyle = `--ui-image-ratio:${Array.isArray(currentRatio) ? `${currentRatio[0]} / ${currentRatio[1]}` : currentRatio};`;
        const radiusStyle = `--ui-image-radius:${typeof currentRadius === 'number' ? `${currentRadius}px` : currentRadius};`;
        return `background-image:url("${dom.use(src)}");${radiusStyle}${ratioStyle}--ui-image-size:${dom.use(size)}px;${dom.use(style)}`;
    };
    return ({type:Flex.Flex,props:{...props,style:newStyle,class:() => styles.root},children:[children]});
}

exports.Image = Image;
