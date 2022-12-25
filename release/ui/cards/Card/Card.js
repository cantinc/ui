'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../layout/index.js');
var Card$1 = require('./Card.scss.js');
var Flex = require('../../layout/Flex/Flex.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Card$1["default"]);
function Card(_a = {}) {
    var { onclick, clickable = !!onclick, preventAnimation } = _a, props = tslib.__rest(_a, ["onclick", "clickable", "preventAnimation"]);
    const children = jsx.useChildren();
    const hidden = dom.useHidden();
    const styles = useStyle();
    const show = dom.useShow();
    const shown = new watchState.State(false);
    if (!preventAnimation) {
        const timer = setTimeout(() => {
            shown.value = true;
        }, 600);
        watchState.onDestroy(() => clearTimeout(timer));
    }
    return ({type:Flex.Flex,props:{onclick:onclick,...props,class:() => preventAnimation
            ? classes__default["default"]([
                styles.root,
                styles.show,
                styles.shown,
                clickable && styles.clickable,
            ])
            : classes__default["default"]([
                styles.root,
                clickable && styles.clickable,
                show.value && styles.show,
                shown.value && styles.shown,
                (hidden === null || hidden === void 0 ? void 0 : hidden.value) && styles.hide,
            ])},children:[children]});
}

exports.Card = Card;
