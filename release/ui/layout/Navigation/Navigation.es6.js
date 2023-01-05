import { __rest } from 'tslib';
import { style, Ref } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import { State } from 'watch-state';
import '../Flex/index.es6.js';
import modules_a22eb676 from './Navigation.scss.es6.js';
import { Flex } from '../Flex/Flex.es6.js';

const useStyles = style({
    root: modules_a22eb676.root,
});
const useItemStyles = style({
    root: modules_a22eb676.link,
    active: modules_a22eb676.linkActive,
});
const useSubMenuStyles = style({
    root: modules_a22eb676.submenu,
});
function NavigationItem(_a = {}) {
    var { children = useChildren(), menu, access = true } = _a, props = __rest(_a, ["children", "menu", "access"]);
    const styles = useItemStyles();
    return ({type:'show',props:{state:access},children:[{type:'a',props:{...props,class:styles},children:[children]},menu && ({type:NavigationItems,children:[menu.map(item => ({type:NavigationItem,props:{...item}}))]})]});
}
function* NavigationItems(props) {
    const children = useChildren();
    const styles = useSubMenuStyles();
    const el = (props === null || props === void 0 ? void 0 : props.ref) || new Ref();
    const height = new State(0);
    yield ({type:'section',props:{...props,ref:el,style:Object.assign(Object.assign({}, props === null || props === void 0 ? void 0 : props.style), { '--ui-sub-menu-height': () => `${height.value}px` }),class:() => styles.root},children:[children]});
    setTimeout(() => {
        height.value = el.value.scrollHeight;
    });
}
function Navigation(_a = {}) {
    var { menu } = _a, props = __rest(_a, ["menu"]);
    const children = useChildren();
    const styles = useStyles();
    return ({type:Flex,props:{element:'nav',...props,class:() => styles.root},children:[menu === null || menu === void 0 ? void 0 : menu.map(item => ({type:NavigationItem,props:{...item}})),' ',children]});
}
Navigation.Item = NavigationItem;
Navigation.Items = NavigationItems;

export { Navigation };
