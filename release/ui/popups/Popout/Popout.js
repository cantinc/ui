'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../../hooks/index.js');
require('../../../utils/index.js');
require('../../layout/index.js');
var Popout$1 = require('./Popout.scss.js');
var useEscapeListener = require('../../../hooks/useEscapeListener/useEscapeListener.js');
var setOverflow = require('../../../utils/setOverflow/setOverflow.js');
var Flex = require('../../layout/Flex/Flex.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Popout$1["default"]);
let popoutCount = 0;
function PopoutElement(_a) {
    var { element, style, contentStyle, onhide, rootRef = new dom.Ref() } = _a, props = tslib.__rest(_a, ["element", "style", "contentStyle", "onhide", "rootRef"]);
    if (!element.value)
        return null;
    const children = jsx.useChildren();
    const hide = dom.useHidden();
    const preshow = dom.useShow();
    const show = dom.useShow(200);
    const styles = useStyle();
    let touchStart;
    let touchStartX;
    const touched = new watchState.State(false);
    const touchHide = new watchState.State(0);
    useEscapeListener.useEscapeListener(onhide);
    const elementData = new watchState.State({
        rect: element.value.getBoundingClientRect(),
        styles: window.getComputedStyle(element.value),
    });
    if (hide) {
        new watchState.Watch(() => {
            if (element.value && hide.value) {
                elementData.value = {
                    rect: element.value.getBoundingClientRect(),
                    styles: window.getComputedStyle(element.value),
                };
            }
        });
    }
    if (!popoutCount) {
        setOverflow.setOverflow('hidden');
    }
    popoutCount++;
    watchState.onDestroy(() => {
        popoutCount--;
        if (!popoutCount) {
            setOverflow.setOverflow('');
        }
    });
    return ({type:'div',props:{ref:rootRef,style:Object.assign(Object.assign({}, style), { '--ui-popout-top': () => `${elementData.value.rect.top}px`, '--ui-popout-left': () => `${elementData.value.rect.left}px`, '--ui-popout-width': () => `${elementData.value.rect.width}px`, '--ui-popout-height': () => `${elementData.value.rect.height}px`, '--ui-popout-radius': () => `${elementData.value.styles.borderRadius}`, '--ui-popout-border': () => `${elementData.value.styles.border}`, '--ui-popout-touch-hide': () => `${touchHide.value}px`, '--ui-popout-background': () => `${elementData.value.styles.background}` }),ontouchstart:(e) => {
            touchStart = e.touches[0].clientY;
            touchStartX = e.touches[0].clientX;
            touched.value = true;
        },ontouchmove:(e) => {
            if (!touched.value)
                return;
            const newTouchHide = e.touches[0].clientY - touchStart;
            const newTouchStartX = Math.abs(e.touches[0].clientX - touchStartX);
            if (newTouchStartX > newTouchHide) {
                touched.value = false;
                touchHide.value = 0;
                return;
            }
            if (newTouchHide > 100) {
                touched.value = false;
                onhide();
            }
            else {
                touchHide.value = e.touches[0].clientY - touchStart;
            }
        },ontouchend:() => {
            touched.value = false;
            touchHide.value = 0;
        },class:() => classes__default["default"]([
            styles.root,
            preshow.value && styles.preshow,
            show.value && styles.show,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
            touched.value && styles.touch,
        ])},children:[{type:Flex.Flex,props:{...props,style:contentStyle,class:() => styles.content},children:[children]}]});
}
function Popout(_a) {
    var { show = true, onhide } = _a, props = tslib.__rest(_a, ["show", "onhide"]);
    const children = jsx.useChildren();
    const hide = new dom.Ref();
    const setHide = actionProp.actionProp(show, onhide);
    return ({type:'show',props:{state:show},children:[{type:'portal',props:{parent:document.body},children:[{type:'delay',props:{ref:hide,hide:600},children:[{type:PopoutElement,props:{onhide:() => setHide === null || setHide === void 0 ? void 0 : setHide(false),...props},children:[children]}]}]}]});
}

exports.Popout = Popout;
