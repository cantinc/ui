'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../layout/index.js');
var Dropdown$1 = require('./Dropdown.scss.js');
var Flex = require('../../layout/Flex/Flex.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Dropdown$1["default"]);
function DropdownContent(_a) {
    var { element, onclick, style, placement = 'bottom' } = _a, props = tslib.__rest(_a, ["element", "onclick", "style", "placement"]);
    const children = jsx.useChildren();
    const hide = dom.useHidden();
    const show = dom.useShow();
    const styles = useStyle();
    const top = new watchState.State('');
    const rect = new watchState.State();
    const verticalKey = placement === 'bottom' ? 'top' : 'bottom';
    const { documentElement } = document;
    const updateTop = () => {
        var _a;
        const currentRect = (_a = element.value) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (currentRect) {
            rect.value = currentRect;
            top.value = placement === 'bottom'
                ? `${currentRect.top + currentRect.height + documentElement.scrollTop + 8}px`
                : `${documentElement.clientHeight - currentRect.top - documentElement.scrollTop + 8}px`;
        }
    };
    const listener = () => {
        requestAnimationFrame(updateTop);
    };
    window.addEventListener('resize', listener);
    watchState.unwatch(updateTop);
    watchState.onDestroy(() => {
        window.removeEventListener('resize', listener);
    });
    return ({type:Flex.Flex,props:{...props,onclick:(e) => {
            e.stopPropagation();
            onclick === null || onclick === void 0 ? void 0 : onclick(e);
        },style:Object.assign(Object.assign({}, style), { left: () => `${rect.value.left}px`, right: () => `calc(100% - ${rect.value.right}px)`, [verticalKey]: top }),class:() => classes__default["default"]([
            styles.root,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
            (show === null || show === void 0 ? void 0 : show.value) && styles.show,
        ])},children:[children]});
}
function Dropdown(_a) {
    var { show } = _a, props = tslib.__rest(_a, ["show"]);
    const children = jsx.useChildren();
    const hide = new dom.Ref();
    return ({type:'show',props:{when:show},children:[{type:'portal',props:{parent:document.body},children:[{type:'delay',props:{ref:hide,hide:300},children:[{type:DropdownContent,props:{...props},children:[children]}]}]}]});
}

exports.Dropdown = Dropdown;
exports.DropdownContent = DropdownContent;
