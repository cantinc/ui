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
    var { ref, count, autoscroll, style, size = 12, progress, value = new watchState.State(0), onchange, onend, circular } = _a, props = tslib.__rest(_a, ["ref", "count", "autoscroll", "style", "size", "progress", "value", "onchange", "onend", "circular"]);
    const styles = useStyle();
    const children = jsx.useChildren();
    onchange = actionProp.actionProp(value, onchange);
    let timer;
    let fix = false;
    const transition = new watchState.State(0.3);
    const pseudoValue = new watchState.State();
    const nextValue = new watchState.State(0);
    new watchState.Watch(() => {
        const currentValue = dom.use(value);
        // because of browsers bug (dynamic changes of transition has not an effect)
        if (dom.use(autoscroll) && !fix && watchState.unwatch(() => pseudoValue.value) === currentValue) {
            pseudoValue.value = currentValue - 1;
            setTimeout(() => {
                pseudoValue.value = currentValue;
            });
            return;
        }
        pseudoValue.value = currentValue;
    });
    new watchState.Watch(() => {
        const currentAutoscroll = dom.use(autoscroll);
        if (currentAutoscroll) {
            new watchState.Watch(() => {
                fix = false;
                clearTimeout(timer);
                const currentValue = dom.use(value);
                transition.value = 0.3;
                nextValue.value = currentValue + 1;
                timer = setTimeout(() => {
                    const newTransition = currentAutoscroll === true ? 10000 : currentAutoscroll;
                    transition.value = newTransition / 1000;
                    const newValue = nextValue.value;
                    pseudoValue.value = newValue;
                    timer = setTimeout(() => {
                        fix = true;
                        if (newValue === count) {
                            onend === null || onend === void 0 ? void 0 : onend();
                            if (circular) {
                                onchange === null || onchange === void 0 ? void 0 : onchange(0);
                            }
                        }
                        else {
                            onchange === null || onchange === void 0 ? void 0 : onchange(newValue);
                        }
                    }, newTransition);
                }, 1000);
            });
        }
        else {
            clearTimeout(timer);
        }
    });
    watchState.onDestroy(() => clearTimeout(timer));
    const dotsProgress = new watchState.Cache(() => (dom.use(autoscroll) ? pseudoValue.value : pseudoValue.value + 1) / count);
    const array = [...new Array(count)].map((_, i) => i);
    return ({type:Flex.Flex,props:{gap:8,...props,ref:ref,style:Object.assign(Object.assign({}, style), { '--ui-dots-progress': dom.inject(dotsProgress, String), '--ui-dots-size': dom.inject(size, size => `${size}px`), '--ui-dots-transition': () => `${transition.value}s`, '--ui-dots-left': progress ? '0' : () => `calc(100% * ${((dom.use(autoscroll) ? nextValue.value / count : dotsProgress.value)) - (1 / count)})` }),class:() => styles.root},children:[array.map(i => ({type:'div',props:{class:() => classes__default["default"]([
                styles.dot,
                dom.use(value) === i && styles.active,
            ]),onclick:() => onchange === null || onchange === void 0 ? void 0 : onchange(i)},children:[children === null || children === void 0 ? void 0 : children[0](i)]})),{type:Flex.Flex,props:{gap:8,...props,class:() => styles.progress},children:[array.map(i => ({type:'div',props:{class:() => styles.dotProgress},children:[children === null || children === void 0 ? void 0 : children[0](i)]}))]}]});
}

exports.Dots = Dots;
