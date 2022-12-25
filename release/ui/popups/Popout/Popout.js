'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../layout/index.js');
var Popout$1 = require('./Popout.scss.js');
var setOverflow = require('../../../utils/setOverflow/setOverflow.js');
var Flex = require('../../layout/Flex/Flex.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Popout$1["default"]);
let popoutCount = 0;
function PopoutElement(_a) {
    var { element, style = '', contentStyle } = _a, props = tslib.__rest(_a, ["element", "style", "contentStyle"]);
    if (!element.value)
        return null;
    const children = jsx.useChildren();
    const hide = dom.useHidden();
    const preshow = dom.useShow();
    const show = dom.useShow(200);
    const styles = useStyle();
    const rect = element.value.getBoundingClientRect();
    const elementStyles = window.getComputedStyle(element.value);
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
    const newStyle = () => `--ui-popout-top:${rect.top}px;--ui-popout-left:${rect.left}px;--ui-popout-width:${rect.width}px;--ui-popout-height:${rect.height}px;--ui-popout-radius:${elementStyles.borderRadius};--ui-popout-border:${elementStyles.border};--ui-popout-background:${elementStyles.background};${dom.use(style)}`;
    return ({type:'div',props:{style:newStyle,class:() => classes__default["default"]([
            styles.root,
            preshow.value && styles.preshow,
            show.value && styles.show,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
        ])},children:[{type:Flex.Flex,props:{...props,style:contentStyle,class:() => styles.content},children:[children]}]});
}
function Popout(_a) {
    var { show = true } = _a, props = tslib.__rest(_a, ["show"]);
    const children = jsx.useChildren();
    const hide = new dom.Ref();
    return ({type:'show',props:{state:show},children:[{type:'portal',props:{parent:document.body},children:[{type:'delay',props:{ref:hide,hide:600},children:[{type:PopoutElement,props:{...props},children:[children]}]}]}]});
}

exports.Popout = Popout;
