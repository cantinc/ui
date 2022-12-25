'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../Flex/index.js');
var Navigation$1 = require('./Navigation.scss.js');
var Flex = require('../Flex/Flex.js');

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
    var { children = jsx.useChildren(), menu } = _a, props = tslib.__rest(_a, ["children", "menu"]);
    const styles = useItemStyles();
    return ([{type:'a',props:{...props,class:styles},children:[children]},menu && ({type:NavigationItems,children:[menu.map(item => ({type:NavigationItem,props:{...item}}))]})]);
}
function* NavigationItems(props) {
    const children = jsx.useChildren();
    const styles = useSubMenuStyles();
    const el = (props === null || props === void 0 ? void 0 : props.ref) || new dom.Ref();
    const height = new watchState.State(0);
    yield ({type:'section',props:{...props,ref:el,style:() => `--ui-sub-menu-height:${height.value}px;${dom.use(props === null || props === void 0 ? void 0 : props.style) || ''}`,class:() => styles.root},children:[children]});
    setTimeout(() => {
        height.value = el.value.scrollHeight;
    });
}
function Navigation(_a = {}) {
    var { menu } = _a, props = tslib.__rest(_a, ["menu"]);
    const children = jsx.useChildren();
    const styles = useStyles();
    return ({type:Flex.Flex,props:{element:'nav',...props,class:() => styles.root},children:[menu === null || menu === void 0 ? void 0 : menu.map(item => ({type:NavigationItem,props:{...item}})),' ',children]});
}
Navigation.Item = NavigationItem;
Navigation.Items = NavigationItems;

exports.Navigation = Navigation;
