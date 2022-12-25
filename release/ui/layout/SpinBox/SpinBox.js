'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../Flex/index.js');
require('../Spin/index.js');
var SpinBox$1 = require('./SpinBox.scss.js');
var Spin = require('../Spin/Spin.js');
var Flex = require('../Flex/Flex.js');

const useStyle = dom.style(SpinBox$1["default"]);
function SpinBox(_a) {
    var { loading, horizontal } = _a, props = tslib.__rest(_a, ["loading", "horizontal"]);
    const children = jsx.useChildren();
    const styles = useStyle();
    const loadingCache = new watchState.Cache(loading);
    const spinner = ({type:'delay',props:{show:300,hide:300},children:[{type:Spin.Spin,props:{align:'center',justify:'center',class:styles.spin}}]});
    return ({type:Flex.Flex,props:{...props,vertical:!horizontal,class:() => [
            styles.root,
            loadingCache.value && styles.loading,
        ]},children:[children,' ',() => loadingCache.value && spinner]});
}

exports.SpinBox = SpinBox;
