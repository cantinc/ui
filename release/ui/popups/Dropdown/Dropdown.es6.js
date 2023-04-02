import { __rest } from 'tslib';
import { style, useHidden, useShow, Ref } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import '../../layout/index.es6.js';
import modules_aa06803e from './Dropdown.scss.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_aa06803e);
function DropdownContent(_a) {
    var _b;
    var { element, onclick, style, placement = 'bottom' } = _a, props = __rest(_a, ["element", "onclick", "style", "placement"]);
    const children = useChildren();
    const hide = useHidden();
    const show = useShow();
    const styles = useStyle();
    const rect = (_b = element.value) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
    const { documentElement } = document;
    const verticalKey = placement === 'bottom' ? 'top' : 'bottom';
    const verticalValue = placement === 'bottom'
        ? `${rect.top + rect.height + documentElement.scrollTop + 8}px`
        : `${documentElement.clientHeight - rect.top - documentElement.scrollTop + 8}px`;
    return ({type:Flex,props:{...props,onclick:(e) => {
            e.stopPropagation();
            onclick === null || onclick === void 0 ? void 0 : onclick(e);
        },style:Object.assign(Object.assign({}, style), { left: `${rect.left}px`, right: `calc(100% - ${rect.right}px)`, [verticalKey]: verticalValue }),class:() => classes([
            styles.root,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
            (show === null || show === void 0 ? void 0 : show.value) && styles.show,
        ])},children:[children]});
}
function Dropdown(_a) {
    var { show } = _a, props = __rest(_a, ["show"]);
    const children = useChildren();
    const hide = new Ref();
    return ({type:'show',props:{when:show},children:[{type:'portal',props:{parent:document.body},children:[{type:'delay',props:{ref:hide,hide:300},children:[{type:DropdownContent,props:{...props},children:[children]}]}]}]});
}

export { Dropdown, DropdownContent };
