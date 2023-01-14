'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../../layout/index.js');
var Buttons$1 = require('./Buttons.scss.js');
var Flex = require('../../layout/Flex/Flex.js');

const useStyles = dom.style(Buttons$1["default"]);
function Buttons(props) {
    const children = jsx.useChildren();
    const styles = useStyles();
    return ({type:Flex.Flex,props:{wrap:true,gap:24,...props,class:() => styles.root},children:[children]});
}

exports.Buttons = Buttons;
