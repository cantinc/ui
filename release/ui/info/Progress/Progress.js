'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
require('../../layout/index.js');
var Progress$1 = require('./Progress.scss.js');
var Flex = require('../../layout/Flex/Flex.js');

const useStyle = dom.style(Progress$1["default"]);
function Progress(_a) {
    var { style, value } = _a, props = tslib.__rest(_a, ["style", "value"]);
    const styles = useStyle();
    return ({type:Flex.Flex,props:{padding:8,...props,style:Object.assign(Object.assign({}, style), { '--ui-progress': dom.inject(value, String) }),class:() => styles.root}});
}

exports.Progress = Progress;
