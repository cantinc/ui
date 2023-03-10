'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../../layout/index.js');
var Cards$1 = require('./Cards.scss.js');
var Flex = require('../../layout/Flex/Flex.js');

const useStyle = dom.style(Cards$1["default"]);
function* Cards(_a = {}) {
    var { ref = new dom.Ref(), timeout } = _a, props = tslib.__rest(_a, ["ref", "timeout"]);
    const styles = useStyle();
    const children = jsx.useChildren();
    const getTop = () => { var _a; return (_a = ref.value) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().top; };
    const updateTop = () => {
        var _a;
        (_a = ref.value) === null || _a === void 0 ? void 0 : _a.style.setProperty('--ui-cards-top', `${getTop()}px`);
    };
    if (timeout) {
        setTimeout(updateTop, timeout);
    }
    yield ({type:Flex.Flex,props:{gap:24,wrap:true,...props,ref:ref,class:styles.root},children:[children]});
    updateTop();
}

exports.Cards = Cards;
