import { __rest } from 'tslib';
import { style, useHidden, useShow, Ref } from '@innet/dom';
import { useChildren } from '@innet/jsx';
import classes from 'html-classes';
import { State, onDestroy, unwatch } from 'watch-state';
import '../../layout/index.es6.js';
import modules_aa06803e from './Dropdown.scss.es6.js';
import { getOverflowParent } from './helpers.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_aa06803e);
function DropdownContent(_a) {
    var { element, onclick, style, placement = 'bottom' } = _a, props = __rest(_a, ["element", "onclick", "style", "placement"]);
    const children = useChildren();
    const hide = useHidden();
    const show = useShow();
    const styles = useStyle();
    const top = new State('');
    const rect = new State();
    const verticalKey = placement === 'bottom' ? 'top' : 'bottom';
    const updateTop = () => {
        var _a;
        const currentRect = (_a = element.value) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        const offset = document.body.style.overflow ? document.documentElement.scrollTop : 0;
        if (currentRect) {
            rect.value = currentRect;
            top.value = placement === 'bottom'
                ? `${currentRect.top + currentRect.height + 8 + offset}px`
                : `${currentRect.top + 8}px`;
        }
    };
    const listener = () => {
        requestAnimationFrame(updateTop);
    };
    window.addEventListener('resize', listener);
    const currentElement = element.value;
    if (currentElement) {
        const parent = getOverflowParent(currentElement);
        document.addEventListener('scroll', listener);
        parent.addEventListener('scroll', listener);
        onDestroy(() => {
            document.removeEventListener('scroll', listener);
            parent.removeEventListener('scroll', listener);
        });
    }
    unwatch(updateTop);
    onDestroy(() => {
        window.removeEventListener('resize', listener);
    });
    return ({type:Flex,props:{...props,onclick:(e) => {
            e.stopPropagation();
            onclick === null || onclick === void 0 ? void 0 : onclick(e);
        },style:Object.assign(Object.assign({}, style), { left: () => `${rect.value.left}px`, right: () => `calc(100% - ${rect.value.right}px)`, [verticalKey]: top }),class:() => classes([
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
