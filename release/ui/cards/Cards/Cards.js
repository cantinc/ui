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
    var _b;
    var { ref = new dom.Ref() } = _a, props = tslib.__rest(_a, ["ref"]);
    const styles = useStyle();
    const children = jsx.useChildren();
    const getTop = () => { var _a; return (_a = ref.value) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().top; };
    yield ({type:Flex.Flex,props:{gap:24,wrap:true,...props,ref:ref,class:styles.root},children:[children]});
    (_b = ref.value) === null || _b === void 0 ? void 0 : _b.style.setProperty('--ui-cards-top', `${getTop()}px`);
}

exports.Cards = Cards;
