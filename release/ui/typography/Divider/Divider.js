'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var Divider$1 = require('./Divider.scss.js');

const useStyles = dom.style(Divider$1["default"]);
function Divider(props) {
    const children = jsx.useChildren();
    const styles = useStyles();
    if (!children)
        return {type:'hr',props:{...props,class:styles.root}};
    return ({type:'fieldset',props:{class:styles.root},children:[{type:'legend',props:{class:styles.legend},children:[children]}]});
}

exports.Divider = Divider;
