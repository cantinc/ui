'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var SyncTimer = require('sync-timer');
var watchState = require('watch-state');
require('../Flex/index.js');
var Navigation$1 = require('./Navigation.scss.js');
var Flex = require('../Flex/Flex.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var SyncTimer__default = /*#__PURE__*/_interopDefaultLegacy(SyncTimer);

const useStyles = dom.style({
    root: Navigation$1["default"].root,
});
const useItemStyles = dom.style({
    root: Navigation$1["default"].link,
    active: Navigation$1["default"].linkActive,
});
const useSubMenuStyles = dom.style({
    root: Navigation$1["default"].submenu,
});
function NavigationItem(_a = {}) {
    var { children = jsx.useChildren(), menu, access = true } = _a, props = tslib.__rest(_a, ["children", "menu", "access"]);
    const styles = useItemStyles();
    return ({type:'show',props:{when:access},children:[{type:'a',props:{...props,class:styles},children:[children]},menu && ({type:NavigationItems,children:[menu.map(item => ({type:NavigationItem,props:{...item}}))]})]});
}
function NavigationItems(props) {
    const children = jsx.useChildren();
    const styles = useSubMenuStyles();
    const el = (props === null || props === void 0 ? void 0 : props.ref) || new dom.Ref();
    const height = new watchState.State(0);
    new SyncTimer__default["default"](() => {
        height.value = el.value.scrollHeight;
    });
    return ({type:'section',props:{...props,ref:el,style:Object.assign(Object.assign({}, props === null || props === void 0 ? void 0 : props.style), { '--ui-sub-menu-height': () => `${height.value}px` }),class:() => styles.root},children:[children]});
}
function Navigation(_a = {}) {
    var { menu } = _a, props = tslib.__rest(_a, ["menu"]);
    const children = jsx.useChildren();
    const styles = useStyles();
    return ({type:Flex.Flex,props:{element:'nav',align:'stretch',gap:32,...props,class:() => styles.root},children:[menu === null || menu === void 0 ? void 0 : menu.map(item => ({type:NavigationItem,props:{...item}})),' ',children]});
}
Navigation.Item = NavigationItem;
Navigation.Items = NavigationItems;

exports.Navigation = Navigation;
