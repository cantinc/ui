'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../../hooks/index.js');
require('../../../utils/index.js');
require('../../buttons/index.js');
require('../../layout/index.js');
var Popout$1 = require('./Popout.scss.js');
var useTouchHide = require('../../../hooks/useTouchHide/useTouchHide.js');
var useEscapeListener = require('../../../hooks/useEscapeListener/useEscapeListener.js');
var setOverflow = require('../../../utils/setOverflow/setOverflow.js');
var CloseButton = require('../../buttons/CloseButton/CloseButton.js');
var Flex = require('../../layout/Flex/Flex.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Popout$1["default"]);
let popoutCount = 0;
const createStyles = () => {
    const styles = document.createElement('span').style;
    styles.setProperty('border-radius', '20px');
    return styles;
};
function PopoutElement(_a) {
    var { element, style, contentStyle, onhide, rootRef = new dom.Ref(), ref = new dom.Ref(), background, closeButton } = _a, props = tslib.__rest(_a, ["element", "style", "contentStyle", "onhide", "rootRef", "ref", "background", "closeButton"]);
    const children = jsx.useChildren();
    const hide = dom.useHidden();
    const preshow = dom.useShow();
    const show = dom.useShow(200);
    const shown = dom.useShow(500);
    const { touched, touchHide, handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchHide.useTouchHide({
        hide: onhide,
        touchStart() {
            elementData.value = getData();
        },
        element: ref,
    });
    const styles = useStyle();
    useEscapeListener.useEscapeListener(onhide);
    const getData = () => {
        var _a;
        return ((_a = element === null || element === void 0 ? void 0 : element.value) === null || _a === void 0 ? void 0 : _a.isConnected)
            ? ({
                rect: element.value.getBoundingClientRect(),
                styles: window.getComputedStyle(element.value),
            })
            : ({
                rect: new DOMRect(window.innerWidth / 2, window.innerHeight / 2, 0, 0),
                styles: createStyles(),
            });
    };
    const elementData = new watchState.State(getData());
    if (hide) {
        new watchState.Watch(() => {
            if (hide.value) {
                elementData.value = getData();
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
    return ({type:'div',props:{ref:rootRef,style:Object.assign(Object.assign({}, style), { '--ui-popout-top': () => `${elementData.value.rect.top}px`, '--ui-popout-left': () => `${elementData.value.rect.left}px`, '--ui-popout-width': () => `${elementData.value.rect.width}px`, '--ui-popout-height': () => `${elementData.value.rect.height}px`, '--ui-popout-radius': () => `${elementData.value.styles.borderRadius}`, '--ui-popout-border': () => `${elementData.value.styles.border}`, '--ui-popout-touch-hide': () => `${touchHide.value}`, background: () => `${dom.use(background) || elementData.value.styles.background}` }),ontouchstart:handleTouchStart,ontouchmove:handleTouchMove,ontouchend:handleTouchEnd,class:() => classes__default["default"]([
            styles.root,
            preshow.value && styles.preshow,
            show.value && styles.show,
            shown.value && styles.shown,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
            touched.value && styles.touch,
        ])},children:[{type:'show',props:{state:closeButton},children:[{type:'div',props:{class:() => styles.static},children:[{type:CloseButton.CloseButton,props:{onclick:onhide,...typeof closeButton === 'boolean' ? {} : closeButton}}]}]},{type:Flex.Flex,props:{...props,ref:ref,style:contentStyle,class:() => styles.content},children:[children]}]});
}
function Popout(_a) {
    var { show = true, onhide } = _a, props = tslib.__rest(_a, ["show", "onhide"]);
    const children = jsx.useChildren();
    const hide = new dom.Ref();
    const setHide = actionProp.actionProp(show, onhide);
    return ({type:'show',props:{state:show},children:[{type:'portal',props:{parent:document.body},children:[{type:'delay',props:{ref:hide,hide:600},children:[{type:PopoutElement,props:{onhide:() => setHide === null || setHide === void 0 ? void 0 : setHide(false),...props},children:[children]}]}]}]});
}

exports.Popout = Popout;
