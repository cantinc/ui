'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var utils = require('@cantinc/utils');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../icons/index.js');
require('../../typography/index.js');
require('../Input/index.js');
var InputNumber$1 = require('./InputNumber.scss.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var Input = require('../Input/Input.js');
var Icon = require('../../icons/Icon/Icon.js');
var Divider = require('../../typography/Divider/Divider.js');

const useStyles = dom.style(InputNumber$1["default"]);
function InputNumber(_a = {}) {
    var _b;
    var { value = new watchState.State(0), step = 1, oninput, min, max, inputRef = new dom.Ref(), onkeydown } = _a, props = tslib.__rest(_a, ["value", "step", "oninput", "min", "max", "inputRef", "onkeydown"]);
    const { hint } = jsx.useSlots();
    const styles = useStyles();
    oninput = actionProp.actionProp(value, oninput);
    const increase = () => {
        const newValue = utils.strip(dom.use(value) + dom.use(step));
        const currentMin = dom.use(min);
        const currentMax = dom.use(max);
        if (currentMin !== undefined && newValue < currentMin) {
            return oninput === null || oninput === void 0 ? void 0 : oninput(currentMin);
        }
        if (currentMax !== undefined && newValue > currentMax) {
            return oninput === null || oninput === void 0 ? void 0 : oninput(currentMax);
        }
        oninput === null || oninput === void 0 ? void 0 : oninput(newValue);
    };
    const decrease = () => {
        const newValue = utils.strip(dom.use(value) - dom.use(step));
        const currentMin = dom.use(min);
        const currentMax = dom.use(max);
        if (currentMin !== undefined && newValue < currentMin) {
            return oninput === null || oninput === void 0 ? void 0 : oninput(currentMin);
        }
        if (currentMax !== undefined && newValue > currentMax) {
            return oninput === null || oninput === void 0 ? void 0 : oninput(currentMax);
        }
        oninput === null || oninput === void 0 ? void 0 : oninput(newValue);
    };
    let lastKey = '';
    return ({type:Input.Input,props:{inputRef:inputRef,type:'number',value:() => String(dom.use(value)),props:Object.assign(Object.assign({}, props.props), { input: Object.assign({ step: dom.inject(step, String), min: dom.inject(min, String), max: dom.inject(max, String) }, (_b = props.props) === null || _b === void 0 ? void 0 : _b.input) }),...props,oninput:val => {
            const newValue = Number(val);
            const oldValue = dom.use(value);
            if (oldValue !== newValue) {
                oninput === null || oninput === void 0 ? void 0 : oninput(newValue);
            }
            else if (!newValue && inputRef.value && lastKey === 'Backspace') {
                inputRef.value.value = '0';
            }
        },onkeydown:(e) => {
            lastKey = e.key;
            onkeydown === null || onkeydown === void 0 ? void 0 : onkeydown(e);
        },class:styles},children:[{type:'slot',props:{name:'after'},children:[{type:Icon.Icon,props:{icon:'minus',onclick:decrease,class:() => styles.minus}},{type:Divider.Divider,props:{vertical:true}},{type:Icon.Icon,props:{icon:'plus',onclick:increase,class:() => styles.minus}}]},hint && {type:'slot',children:[hint]}]});
}

exports.InputNumber = InputNumber;
