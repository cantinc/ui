'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var historyApi = require('@watch-state/history-api');
var classes = require('html-classes');
var watchState = require('watch-state');
var webScroll = require('web-scroll');
require('../Flex/index.js');
var Page$1 = require('./Page.scss.js');
var Flex = require('../Flex/Flex.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

function DelayPage(_a = {}) {
    var { show = 300, hide = 300 } = _a, props = tslib.__rest(_a, ["show", "hide"]);
    const children = jsx.useChildren();
    return ({type:'delay',props:{hide:hide,show:show},children:[{type:Page,props:{...props},children:[children]}]});
}
function Page(props) {
    const children = jsx.useChildren();
    const show = dom.useShow();
    const hidden = dom.useHidden();
    const timer = setTimeout(() => {
        const hash = historyApi.locationHash.value;
        if (hash) {
            webScroll.scrollTo(`#${hash}`);
        }
    }, 300);
    watchState.onDestroy(() => clearTimeout(timer));
    return ({type:Flex.Flex,props:{vertical:true,align:'stretch',flex:true,...props,class:() => classes__default["default"]([
            Page$1["default"].root,
            show.value && Page$1["default"].show,
            (hidden === null || hidden === void 0 ? void 0 : hidden.value) && Page$1["default"].hide,
        ])},children:[children]});
}

exports.DelayPage = DelayPage;
exports.Page = Page;
