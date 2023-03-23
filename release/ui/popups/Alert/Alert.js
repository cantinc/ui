'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../../layout/index.js');
var Alert$1 = require('./Alert.scss.js');
var Flex = require('../../layout/Flex/Flex.js');

const useStyle = dom.style(Alert$1["default"]);
function Alert(_a = {}) {
    var { view = 'warning' } = _a, props = tslib.__rest(_a, ["view"]);
    const children = jsx.useChildren();
    const hide = dom.useHidden();
    const show = dom.useShow();
    const styles = useStyle();
    return ({type:Flex.Flex,props:{padding:24,align:'center',justify:'center',...props,class:() => [
            styles.root,
            show.value && styles.show,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
            styles[view],
        ]},children:[children]});
}

exports.Alert = Alert;
