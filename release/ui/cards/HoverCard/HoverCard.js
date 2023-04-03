'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../../layout/index.js');
require('../Card/index.js');
var HoverCard$1 = require('./HoverCard.scss.js');
var Card = require('../Card/Card.js');
var Flex = require('../../layout/Flex/Flex.js');

const useStyle = dom.style(HoverCard$1["default"]);
function HoverCardContent(_a) {
    var { class: styles } = _a, props = tslib.__rest(_a, ["class"]);
    const children = jsx.useChildren();
    const hide = dom.useHidden();
    const show = dom.useShow();
    return ({type:Card.Card,props:{...props,preventAnimation:true,class:() => [
            styles.card,
            show.value && styles.show,
            (hide === null || hide === void 0 ? void 0 : hide.value) && styles.hide,
        ]},children:[children]});
}
function HoverCard(_a = {}) {
    var { padding = 18, width, style, vertical, reverse } = _a, props = tslib.__rest(_a, ["padding", "width", "style", "vertical", "reverse"]);
    const styles = useStyle();
    const { '': title, content } = jsx.useSlots();
    const open = new watchState.State(false);
    const hidden = new dom.Ref();
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
    return ({type:Flex.Flex,props:{...props,padding:padding,class:() => [
            styles.root,
            dom.use(vertical) && dom.use(reverse) && styles.verticalReverse,
        ],tabIndex:0,style:{
            '--ui-hover-card-width': dom.inject(width, width => width === undefined ? '' : `${width}px`),
        },vertical:vertical,reverse:reverse,...actionProps},children:[title,{type:'show',props:{when:open},children:[{type:'delay',props:{ref:hidden,hide:300},children:[{type:HoverCardContent,props:{...props,vertical:vertical,reverse:reverse,padding:padding,class:styles},children:[title,' ',content]}]}]}]});
}

exports.HoverCard = HoverCard;
