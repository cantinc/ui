'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var classes = require('html-classes');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../layout/index.js');
var Dots$1 = require('./Dots.scss.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var Flex = require('../../layout/Flex/Flex.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classes__default = /*#__PURE__*/_interopDefaultLegacy(classes);

const useStyle = dom.style(Dots$1["default"]);
function Dots(_a) {
    var { ref, count, autoscroll, style = '', size = 12, progress, value = new watchState.State(0), onchange } = _a, props = tslib.__rest(_a, ["ref", "count", "autoscroll", "style", "size", "progress", "value", "onchange"]);
    const styles = useStyle();
    const children = jsx.useChildren();
    onchange = actionProp.actionProp(value, onchange);
    let timer;
    let fix = false;
    const transition = new watchState.State(0.3);
    const pseudoValue = new watchState.State();
    new watchState.Watch(() => {
        const currentValue = dom.use(value);
        // because of browsers bug (dynamic changes of transition has not an effect)
        if (autoscroll && !fix && watchState.unwatch(() => pseudoValue.value) === currentValue) {
            pseudoValue.value = currentValue - 1;
            setTimeout(() => {
                pseudoValue.value = currentValue;
            });
            return;
        }
        pseudoValue.value = dom.use(value);
    });
    if (autoscroll) {
        new watchState.Watch(() => {
            fix = false;
            clearTimeout(timer);
            const currentValue = dom.use(value);
            if (autoscroll) {
                transition.value = 0.3;
                timer = setTimeout(() => {
                    const newTransition = autoscroll === true ? 20000 : autoscroll;
                    transition.value = newTransition / 1000;
                    const nextValue = currentValue + 1;
                    pseudoValue.value = nextValue;
                    timer = setTimeout(() => {
                        fix = true;
                        onchange === null || onchange === void 0 ? void 0 : onchange(nextValue === count ? 0 : nextValue);
                    }, newTransition);
                }, 1000);
            }
        });
    }
    const rootStyle = () => {
        const currentValue = autoscroll ? pseudoValue.value : pseudoValue.value + 1;
        const progressStyles = `--ui-dots-progress:${currentValue / count};`;
        const sizeStyles = `--ui-dots-size:${dom.use(size)}px;`;
        const transitionStyles = `--ui-dots-transition:${transition.value}s;`;
        const leftStyles = progress ? '--ui-dots-left:0;' : `--ui-dots-left:calc(100% * (var(--ui-dots-progress) - ${1 / count}));`;
        return `${progressStyles}${sizeStyles}${leftStyles}${transitionStyles}${dom.use(style)}`;
    };
    const array = [...new Array(count)].map((_, i) => i);
    return ({type:Flex.Flex,props:{gap:8,...props,ref:ref,style:rootStyle,class:() => styles.root},children:[array.map(i => ({type:'div',props:{class:() => classes__default["default"]([
                styles.dot,
                dom.use(value) === i && styles.active,
            ]),onclick:() => onchange === null || onchange === void 0 ? void 0 : onchange(i)},children:[children === null || children === void 0 ? void 0 : children[0](i)]})),{type:Flex.Flex,props:{gap:8,...props,class:() => styles.progress},children:[array.map(i => ({type:'div',props:{class:() => styles.dotProgress},children:[children === null || children === void 0 ? void 0 : children[0](i)]}))]}]});
}

exports.Dots = Dots;
