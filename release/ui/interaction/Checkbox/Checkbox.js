'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');
require('../../prototypes/index.js');
var Checkbox$1 = require('./Checkbox.scss.js');
var Check = require('../../prototypes/Check/Check.js');

const useStyle = dom.style(Object.assign({ root: '' }, Checkbox$1["default"]));
function Checkbox(props) {
    const styles = useStyle();
    return {type:Check.Check,props:{type:'checkbox',...props,class:styles}};
}

exports.Checkbox = Checkbox;
