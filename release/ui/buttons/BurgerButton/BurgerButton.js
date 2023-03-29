'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
require('../../icons/index.js');
var BurgerButton$1 = require('./BurgerButton.scss.js');
var Icon = require('../../icons/Icon/Icon.js');

const useStyle = dom.style(BurgerButton$1["default"]);
function BurgerButton(_a = {}) {
    var { size = 16, color, style } = _a, props = tslib.__rest(_a, ["size", "color", "style"]);
    const styles = useStyle();
    return ({type:'button',props:{...props,style:Object.assign(Object.assign({}, style), { '--ui-burger-button-size': dom.inject(size, size => `${size}px`) }),class:() => styles.root},children:[{type:Icon.Icon,props:{size:size,color:color,icon:'menu'}}]});
}

exports.BurgerButton = BurgerButton;
