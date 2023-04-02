import { __rest } from 'tslib';
import { style, useHidden, useShow, Ref, inject } from '@innet/dom';
import { useChildren, useSlots } from '@innet/jsx';
import { State } from 'watch-state';
import '../../layout/index.es6.js';
import '../Card/index.es6.js';
import modules_5df8a924 from './HoverCard.scss.es6.js';
import { Card } from '../Card/Card.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const useStyle = style(modules_5df8a924);
function HoverCardContent(_a) {
    var { class: styles } = _a, props = __rest(_a, ["class"]);
    const children = useChildren();
    const hide = useHidden();
    const show = useShow();
    return ({type:Card,props:{...props,preventAnimation:true,class:() => [
            styles.card,
            show.value && styles.show,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
        ]},children:[children]});
}
function HoverCard(_a = {}) {
    var { padding = 18, width, style } = _a, props = __rest(_a, ["padding", "width", "style"]);
    const styles = useStyle();
    const { '': title, content } = useSlots();
    const open = new State(false);
    const hidden = new Ref();
    const isFine = matchMedia('(pointer:fine)').matches;
    const hide = () => {
        open.value = false;
    };
    const show = () => {
        open.value = true;
    };
    const toggle = () => {
        open.value = !open.value;
    };
    const actionProps = isFine
        ? {
            onmouseenter: show,
            onmouseleave: hide,
            onkeydown: (e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    toggle();
                }
            },
        }
        : {
            onclick: toggle,
            onmouseleave: hide,
        };
    return ({type:Flex,props:{...props,padding:padding,class:() => styles.root,tabIndex:0,style:{
            '--ui-hover-card-width': inject(width, width => width === undefined ? '' : `${width}px`),
        },...actionProps},children:[title,{type:'show',props:{when:open},children:[{type:'delay',props:{ref:hidden,hide:300},children:[{type:HoverCardContent,props:{...props,padding:padding,class:styles},children:[title,' ',content]}]}]}]});
}

export { HoverCard };
