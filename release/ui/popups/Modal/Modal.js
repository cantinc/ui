'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../buttons/index.js');
require('../../layout/index.js');
var Modal$1 = require('./Modal.scss.js');
var CloseButton = require('../../buttons/CloseButton/CloseButton.js');
var setOverflow = require('../../../utils/setOverflow/setOverflow.js');
var Flex = require('../../layout/Flex/Flex.js');
var Button = require('../../buttons/Button/Button.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyles = dom.style(Modal$1["default"]);
let modalsCount = 0;
const defaultCloseButton = {type:CloseButton.CloseButton,props:{offset:8,padding:8,size:16}};
function Modal(_a = {}) {
    var { buttons, width, height, style, headButtons = ['close'], buttonProps = {}, onclosed, onclose, onshow, onmousedown } = _a, props = tslib.__rest(_a, ["buttons", "width", "height", "style", "headButtons", "buttonProps", "onclosed", "onclose", "onshow", "onmousedown"]);
    const styles = useStyles();
    const _b = jsx.useSlots(), { '': children, title, content, subTitle } = _b, slots = tslib.__rest(_b, ['', "title", "content", "subTitle"]);
    const hidden = new dom.Ref();
    const show = new watchState.State(false);
    const scroll = new watchState.State(0);
    const element = new dom.Ref();
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
        setOverflow.setOverflow('hidden');
    }
    modalsCount++;
    watchState.onDestroy(() => {
        modalsCount--;
        if (!modalsCount) {
            setOverflow.setOverflow('');
        }
    });
    return ({type:'delay',props:{ref:hidden,hide:300},children:[{type:'div',props:{...props,style:Object.assign(Object.assign({}, style), { '--ui-modal-width': dom.inject(width, width => typeof width === 'number' ? `${width}px` : width || ''), '--ui-modal-height': dom.inject(height, height => typeof height === 'number' ? `${height}px` : height || '') }),ref:element,_close:() => handleClose,class:() => {
            var _a;
            return classes__default["default"]([
                styles.root,
                show.value && styles.show,
                ((_a = hidden.value) === null || _a === void 0 ? void 0 : _a.value) && styles.hide,
                !title && !subTitle && styles.noTitle,
            ]);
        }},children:[{type:'show',props:{when:title || subTitle || headButtonsLength},children:[{type:Flex.Flex,props:{padding:24,element:'header',vertical:true,align:'stretch',class:() => styles.header},children:[{type:'show',props:{when:title || headButtonsLength},children:[{type:Flex.Flex,props:{flex:true},children:[{type:Flex.Flex,props:{flex:true},children:[title || null]},{type:'show',props:{when:headButtonsLength},children:[{type:'div',props:{class:() => styles.headButtons},children:[headButtons.map(id => ({
            type: id === 'close' ? 'span' : 'button',
            props: Object.assign(Object.assign({}, buttonProps[id]), { 'data-button': id, onclick: () => handleClose(id), class: () => styles.headButton }),
            children: [
                slots[`button-${id}`] || id,
            ],
        }))]}]}]}]},{type:'show',props:{when:subTitle},children:[{type:'div',props:{class:() => styles.subTitle},children:[subTitle]}]}]}]},content && ({type:'div',props:{onscroll:(e) => {
                scroll.value = e.target.scrollTop;
            },style:{
                '--scroll': () => `${scroll.value}px`,
            },class:() => styles.content},children:[content]}),' ',children,{type:'show',props:{when:buttonsLength},children:[{type:Flex.Flex,props:{reverse:true,justify:'center',wrap:true,padding:16,gap:16},children:[buttons === null || buttons === void 0 ? void 0 : buttons.map((id, index) => ({type:Button.Button,props:{flex:true,view:index ? 'secondary' : 'primary',...buttonProps[id],'data-button':id,onclick:() => handleClose(id)},children:[slots[`button-${id}`] || id]}))]}]}]}]});
}

exports.Modal = Modal;
