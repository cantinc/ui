import { __rest } from 'tslib';
import { style, Ref, inject } from '@innet/dom';
import { useSlots } from '@innet/jsx';
import classes from 'html-classes';
import { State, onDestroy } from 'watch-state';
import '../../../utils/index.es6.js';
import '../../buttons/index.es6.js';
import '../../layout/index.es6.js';
import modules_8f0e29bb from './Modal.scss.es6.js';
import { CloseButton } from '../../buttons/CloseButton/CloseButton.es6.js';
import { setOverflow } from '../../../utils/setOverflow/setOverflow.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';
import { Button } from '../../buttons/Button/Button.es6.js';

const useStyles = style(modules_8f0e29bb);
let modalsCount = 0;
const defaultCloseButton = {type:CloseButton,props:{offset:8,padding:8,size:16}};
function Modal(_a = {}) {
    var { buttons, width, height, style, headButtons = ['close'], buttonProps = {}, onclosed, onclose, onshow, onmousedown } = _a, props = __rest(_a, ["buttons", "width", "height", "style", "headButtons", "buttonProps", "onclosed", "onclose", "onshow", "onmousedown"]);
    const styles = useStyles();
    const _b = useSlots(), { '': children, title, content, subTitle } = _b, slots = __rest(_b, ['', "title", "content", "subTitle"]);
    const hidden = new Ref();
    const show = new State(false);
    const scroll = new State(0);
    const element = new Ref();
    const headButtonsLength = headButtons === null || headButtons === void 0 ? void 0 : headButtons.length;
    const buttonsLength = buttons === null || buttons === void 0 ? void 0 : buttons.length;
    if (!('button-close' in slots)) {
        slots['button-close'] = defaultCloseButton;
    }
    setTimeout(() => {
        show.value = true;
        onshow === null || onshow === void 0 ? void 0 : onshow();
    }, 300);
    const handleClose = (result) => {
        var _a;
        if ((_a = hidden.value) === null || _a === void 0 ? void 0 : _a.value)
            return;
        const close = () => onclosed === null || onclosed === void 0 ? void 0 : onclosed(result);
        if (onclose) {
            return onclose(result, close);
        }
        close();
    };
    if (!modalsCount) {
        setOverflow('hidden');
    }
    modalsCount++;
    onDestroy(() => {
        modalsCount--;
        if (!modalsCount) {
            setOverflow('');
        }
    });
    return ({type:'delay',props:{ref:hidden,hide:300},children:[{type:'div',props:{...props,style:Object.assign(Object.assign({}, style), { '--ui-modal-width': inject(width, width => typeof width === 'number' ? `${width}px` : width || ''), '--ui-modal-height': inject(height, height => typeof height === 'number' ? `${height}px` : height || '') }),ref:element,_close:() => handleClose,class:() => {
            var _a;
            return classes([
                styles.root,
                show.value && styles.show,
                ((_a = hidden.value) === null || _a === void 0 ? void 0 : _a.value) && styles.hide,
                !title && !subTitle && styles.noTitle,
            ]);
        }},children:[{type:'show',props:{when:title || subTitle || headButtonsLength},children:[{type:Flex,props:{padding:24,element:'header',vertical:true,align:'stretch',class:() => styles.header},children:[{type:'show',props:{when:title || headButtonsLength},children:[{type:Flex,props:{flex:true},children:[{type:Flex,props:{flex:true},children:[title || null]},{type:'show',props:{when:headButtonsLength},children:[{type:'div',props:{class:() => styles.headButtons},children:[headButtons.map(id => ({
            type: id === 'close' ? 'span' : 'button',
            props: Object.assign(Object.assign({}, buttonProps[id]), { 'data-button': id, onclick: () => handleClose(id), class: () => styles.headButton }),
            children: [
                slots[`button-${id}`] || id,
            ],
        }))]}]}]}]},{type:'show',props:{when:subTitle},children:[{type:'div',props:{class:() => styles.subTitle},children:[subTitle]}]}]}]},content && ({type:'div',props:{onscroll:(e) => {
                scroll.value = e.target.scrollTop;
            },style:{
                '--scroll': () => `${scroll.value}px`,
            },class:() => styles.content},children:[content]}),' ',children,{type:'show',props:{when:buttonsLength},children:[{type:Flex,props:{reverse:true,justify:'center',wrap:true,padding:16,gap:16},children:[buttons === null || buttons === void 0 ? void 0 : buttons.map((id, index) => ({type:Button,props:{flex:true,view:index ? 'secondary' : 'primary',...buttonProps[id],'data-button':id,onclick:() => handleClose(id)},children:[slots[`button-${id}`] || id]}))]}]}]}]});
}

export { Modal };
