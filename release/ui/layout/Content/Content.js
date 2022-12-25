'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../Flex/index.js');
var Content$1 = require('./Content.scss.js');
var Flex = require('../Flex/Flex.js');

const useStyles = dom.style(Content$1["default"]);
function Content(_a = {}) {
    var { width, style = '' } = _a, props = tslib.__rest(_a, ["width", "style"]);
    const children = jsx.useChildren();
    const styles = useStyles();
    const newStyle = () => {
        const currentWidth = dom.use(width);
        const widthStyle = currentWidth ? `--ui-content-width:${currentWidth}px;` : '';
        return `${widthStyle}${dom.use(style)}`;
    };
    return ({type:Flex.Flex,props:{align:'stretch',...props,style:newStyle,class:() => styles.root},children:[children]});
}

exports.Content = Content;
