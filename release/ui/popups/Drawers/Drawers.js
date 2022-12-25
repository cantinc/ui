'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../Overlay/index.js');
var Overlay = require('../Overlay/Overlay.js');

function Drawers(props) {
    const children = jsx.useChildren();
    return ({type:Overlay.Overlay,props:{...props},children:[children]});
}

exports.Drawers = Drawers;
