'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../Flex/index.js');
var Flex = require('../Flex/Flex.js');

function Header(props) {
    const children = jsx.useChildren();
    return ({type:Flex.Flex,props:{element:'header',...props},children:[children]});
}

exports.Header = Header;
