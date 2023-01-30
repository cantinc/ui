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
    var { onclick, clickable = !!onclick, loading, preventAnimation, width, height, style, radius = 8 } = _a, props = tslib.__rest(_a, ["onclick", "clickable", "loading", "preventAnimation", "width", "height", "style", "radius"]);
    const children = jsx.useChildren();
    const hidden = dom.useHidden();
    const styles = useStyle();
    const show = dom.useShow();
    const shown = new watchState.State(false);
    let className;
    const mainClasses = () => [
        styles.root,
        dom.use(clickable) && styles.clickable,
        dom.use(loading) && styles.loading,
    ];
    if (preventAnimation) {
        className = () => classes__default["default"]([
            mainClasses,
            styles.show,
            styles.shown,
        ]);
    }
    else {
        const timer = setTimeout(() => {
            shown.value = true;
        }, 600);
        watchState.onDestroy(() => clearTimeout(timer));
        className = () => classes__default["default"]([
            mainClasses,
            show.value && styles.show,
            shown.value && styles.shown,
            (hidden === null || hidden === void 0 ? void 0 : hidden.value) && styles.hide,
        ]);
    }
    return ({type:Flex.Flex,props:{onclick:onclick,padding:18,...props,style:Object.assign(Object.assign({}, style), { '--ui-card-radius': dom.inject(radius, radius => typeof radius === 'number' ? `${radius}px` : radius), '--ui-card-width': dom.inject(width, width => width ? `${width}px` : ''), '--ui-card-height': dom.inject(height, height => height ? `${height}px` : '') }),class:className},children:[{type:'show',props:{state:dom.inject(loading, loading => !loading)},children:[children]}]});
}

exports.Card = Card;
