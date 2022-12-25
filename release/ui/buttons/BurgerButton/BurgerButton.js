'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var BurgerButton$1 = require('./BurgerButton.scss.js');

const useStyle = dom.style(BurgerButton$1["default"]);
function BurgerButton(_a = {}) {
    var { size = 18, style = '' } = _a, props = tslib.__rest(_a, ["size", "style"]);
    const styles = useStyle();
    const children = jsx.useChildren();
    return ({type:'button',props:{...props,style:() => `--ui-burger-button-size:${size}px;${dom.use(style)}`,class:() => styles.root},children:[{type:'span',props:{class:() => styles.dash}},{type:'span',props:{class:() => styles.dash}},{type:'span',props:{class:() => styles.dash}},{type:'span',props:{class:() => styles.children},children:[children]}]});
}

exports.BurgerButton = BurgerButton;
