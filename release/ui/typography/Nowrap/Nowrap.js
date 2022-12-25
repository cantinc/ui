'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var Nowrap$1 = require('./Nowrap.scss.js');

const useStyle = dom.style(Nowrap$1["default"]);
function Nowrap(props) {
    const children = jsx.useChildren();
    const styles = useStyle();
    return ({type:'span',props:{...props,class:() => styles.root},children:[children]});
}

exports.Nowrap = Nowrap;
