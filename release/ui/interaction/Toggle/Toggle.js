'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');
require('../../prototypes/index.js');
var Toggle$1 = require('./Toggle.scss.js');
var Check = require('../../prototypes/Check/Check.js');

const useStyle = dom.style(Object.assign({ root: '' }, Toggle$1["default"]));
function Toggle(props) {
    const styles = useStyle();
    return {type:Check.Check,props:{type:'checkbox',...props,class:styles}};
}

exports.Toggle = Toggle;
