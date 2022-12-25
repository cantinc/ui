'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../Flex/index.js');
var Flex = require('../Flex/Flex.js');

function Main(props) {
    const children = jsx.useChildren();
    return ({type:Flex.Flex,props:{flex:true,element:'main',...props},children:[children]});
}

exports.Main = Main;
