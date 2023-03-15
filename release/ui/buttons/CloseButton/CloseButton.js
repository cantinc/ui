'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
require('../../icons/index.js');
require('../../layout/index.js');
var CloseButton$1 = require('./CloseButton.scss.js');
var Flex = require('../../layout/Flex/Flex.js');
var Icon = require('../../icons/Icon/Icon.js');

const useStyle = dom.style(CloseButton$1["default"]);
function CloseButton(_a = {}) {
    var { placement = 'topRight', icon = 'cross', offset = 24, size = 18, style } = _a, props = tslib.__rest(_a, ["placement", "icon", "offset", "size", "style"]);
    const styles = useStyle();
    const show = dom.useShow();
    const hide = dom.useHidden();
    return ({type:Flex.Flex,props:{type:'button',element:'button',padding:14,...props,style:Object.assign(Object.assign({}, style), { '--ui-close-button-offset': dom.inject(offset, offset => `${offset}px`) }),class:() => [
            styles.root,
            show.value && styles.show,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
            styles[placement],
        ]},children:[{type:Icon.Icon,props:{size:size,icon:icon}}]});
}

exports.CloseButton = CloseButton;
