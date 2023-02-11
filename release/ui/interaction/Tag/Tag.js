'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
require('../../prototypes/index.js');
var Tag$1 = require('./Tag.scss.js');
var Check = require('../../prototypes/Check/Check.js');

const useStyle = dom.style(Object.assign({ root: '' }, Tag$1["default"]));
function Tag(_a) {
    var { type = 'checkbox', label } = _a, props = tslib.__rest(_a, ["type", "label"]);
    const styles = useStyle();
    return ({type:Check.Check,props:{type:type,...props,label:dom.inject(label, label => label && ({type:'span',props:{class:() => styles.label},children:[label]})),class:styles}});
}

exports.Tag = Tag;
