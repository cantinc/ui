'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../buttons/index.js');
require('../../icons/index.js');
require('../../layout/index.js');
var Modal$1 = require('./Modal.scss.js');
var Icon = require('../../icons/Icon/Icon.js');
var setOverflow = require('../../../utils/setOverflow/setOverflow.js');
var Flex = require('../../layout/Flex/Flex.js');
var Space = require('../../layout/Space/Space.js');
var Button = require('../../buttons/Button/Button.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyles = dom.style(Modal$1["default"]);
let modalsCount = 0;
function Modal(_a = {}) {
    var { buttons, width, height, style, headButtons = ['close'], buttonProps = {}, onclosed, onclose, onshow, onmousedown } = _a, props = tslib.__rest(_a, ["buttons", "width", "height", "style", "headButtons", "buttonProps", "onclosed", "onclose", "onshow", "onmousedown"]);
    const styles = useStyles();
    const _b = jsx.useSlots(), { '': children, title, content, subTitle } = _b, slots = tslib.__rest(_b, ['', "title", "content", "subTitle"]);
    const hidden = new dom.Ref();
    const show = new watchState.State(false);
    const element = new dom.Ref();
    const headButtonsLength = headButtons === null || headButtons === void 0 ? void 0 : headButtons.length;
    const buttonsLength = buttons === null || buttons === void 0 ? void 0 : buttons.length;
    if (!('button-close' in slots)) {
        slots['button-close'] = {type:Icon.Icon,props:{icon:'cross'}};
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
            ]);
        }},children:[{type:'show',props:{state:title || subTitle || headButtonsLength},children:[{type:Flex.Flex,props:{padding:24,element:'header',vertical:true,align:'stretch',class:() => styles.header},children:[{type:'show',props:{state:title || headButtonsLength},children:[{type:Flex.Flex,props:{flex:true},children:[title || null,{type:'show',props:{state:headButtonsLength},children:[{type:Space.Space,props:{gap:8}},{type:'div',props:{class:() => styles.headButtons},children:[headButtons.map(id => ({type:'button',props:{...buttonProps[id],'data-button':id,onclick:() => handleClose(id),class:() => styles.headButton},children:[slots[`button-${id}`] || id]}))]}]}]}]},{type:'show',props:{state:subTitle},children:[{type:'div',props:{class:() => styles.subTitle},children:[subTitle]}]}]}]},content && ({type:'div',props:{class:() => styles.content},children:[content]}),' ',children,{type:'show',props:{state:buttonsLength},children:[{type:Flex.Flex,props:{reverse:true,justify:'center',wrap:true,padding:16,gap:16},children:[buttons === null || buttons === void 0 ? void 0 : buttons.map((id, index) => ({type:Button.Button,props:{flex:true,view:index ? 'secondary' : 'primary',...buttonProps[id],'data-button':id,onclick:() => handleClose(id)},children:[slots[`button-${id}`] || id]}))]}]}]}]});
}

exports.Modal = Modal;
