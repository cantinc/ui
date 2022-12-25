'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../Overlay/index.js');
var Modals$1 = require('./Modals.scss.js');
var Overlay = require('../Overlay/Overlay.js');

const useStyle = dom.style(Modals$1["default"]);
function Modals(props) {
    const children = jsx.useChildren();
    const styles = useStyle();
    return ({type:Overlay.Overlay,props:{justify:'center',align:'center',...props,class:() => styles.root},children:[children]});
}

exports.Modals = Modals;
