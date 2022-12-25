'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var Typography$1 = require('./Typography.scss.js');

const useStyle = dom.style(Typography$1["default"]);
function Typography(props) {
    const children = jsx.useChildren();
    const styles = useStyle();
    return ({type:'article',props:{...props,class:styles.root},children:[children]});
}

exports.Typography = Typography;
