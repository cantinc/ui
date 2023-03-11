'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../../layout/index.js');
var CardsFlex$1 = require('./CardsFlex.scss.js');
var Flex = require('../../layout/Flex/Flex.js');

const useStyle = dom.style(CardsFlex$1["default"]);
function CardsFlex(props) {
    const children = jsx.useChildren();
    const styles = useStyle();
    return ({type:Flex.Flex,props:{...props,class:() => styles.root},children:[children]});
}

exports.CardsFlex = CardsFlex;
