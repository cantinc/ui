'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../../layout/index.js');
var Cards$1 = require('./Cards.scss.js');
var Flex = require('../../layout/Flex/Flex.js');

const useStyle = dom.style(Cards$1["default"]);
function* Cards(props) {
    var _a;
    const styles = useStyle();
    const children = jsx.useChildren();
    const element = new dom.Ref();
    const getTop = () => { var _a; return (_a = element.value) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().top; };
    yield ({type:Flex.Flex,props:{gap:24,wrap:true,...props,ref:element,class:styles.root},children:[children]});
    (_a = element.value) === null || _a === void 0 ? void 0 : _a.style.setProperty('--ui-cards-top', `${getTop()}px`);
}

exports.Cards = Cards;
