'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../Overlay/index.js');
var Modals$1 = require('./Modals.scss.js');
var Overlay = require('../Overlay/Overlay.js');

const useStyle = dom.style(Modals$1["default"]);
const modalsRef = new dom.Ref();
const ModalsPortal = () => {
    const children = jsx.useChildren();
    return modalsRef.value && ({type:'portal',props:{parent:modalsRef.value},children:[children]});
};
function Modals(_a = {}) {
    var { main, ref } = _a, props = tslib.__rest(_a, ["main", "ref"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    return ({type:Overlay.Overlay,props:{ref:main ? modalsRef : ref,justify:'center',align:'center',...props,class:() => styles.root},children:[children]});
}

exports.Modals = Modals;
exports.ModalsPortal = ModalsPortal;
exports.modalsRef = modalsRef;
