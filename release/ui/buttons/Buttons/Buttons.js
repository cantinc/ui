'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../layout/index.js');
var Flex = require('../../layout/Flex/Flex.js');

function Buttons(props) {
    const children = jsx.useChildren();
    return ({type:Flex.Flex,props:{wrap:true,gap:24,...props},children:[children]});
}

exports.Buttons = Buttons;
