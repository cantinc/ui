'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../../layout/index.js');
require('../Card/index.js');
var FlipCard$1 = require('./FlipCard.scss.js');
var Flex = require('../../layout/Flex/Flex.js');
var Card = require('../Card/Card.js');

const useStyle = dom.style(FlipCard$1["default"]);
function FlipCard(_a = {}) {
    var { flip, flex, inline, onclick } = _a, props = tslib.__rest(_a, ["flip", "flex", "inline", "onclick"]);
    const { '': children, backside } = jsx.useSlots();
    const styles = useStyle();
    function handleClick(e) {
        onclick === null || onclick === void 0 ? void 0 : onclick.call(this, e);
    }
    return ({type:Flex.Flex,props:{inline:inline,align:'stretch',flex:flex,class:() => [
            styles.root,
            dom.use(flip) && styles.flip,
        ]},children:[{type:Card.Card,props:{flex:true,...props,onclick:handleClick,class:() => styles.front},children:[children]},{type:Card.Card,props:{...props,onclick:handleClick,class:() => styles.back},children:[backside]}]});
}

exports.FlipCard = FlipCard;
