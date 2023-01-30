'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var utils = require('@cantinc/utils');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../../../utils/index.js');
require('../../icons/index.js');
require('../Input/index.js');
var InputNumber$1 = require('./InputNumber.scss.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var Input = require('../Input/Input.js');
var Icon = require('../../icons/Icon/Icon.js');

const useStyles = dom.style(InputNumber$1["default"]);
function InputNumber(_a = {}) {
    var _b;
    var { value = new watchState.State(0), step = 1, oninput } = _a, props = tslib.__rest(_a, ["value", "step", "oninput"]);
    const { hint } = jsx.useSlots();
    const styles = useStyles();
    oninput = actionProp.actionProp(value, oninput);
    const increase = () => {
        oninput === null || oninput === void 0 ? void 0 : oninput(utils.strip(dom.use(value) + dom.use(step)));
    };
    const decrease = () => {
        oninput === null || oninput === void 0 ? void 0 : oninput(dom.use(value) - dom.use(step));
    };
    return ({type:Input.Input,props:{type:'number',value:() => String(dom.use(value)),oninput:value => oninput === null || oninput === void 0 ? void 0 : oninput(Number(value)),props:Object.assign(Object.assign({}, props.props), { input: Object.assign({ step: dom.inject(step, String) }, (_b = props.props) === null || _b === void 0 ? void 0 : _b.input) }),...props,class:styles},children:[{type:'slot',props:{name:'before'},children:[{type:Icon.Icon,props:{icon:'minus',onclick:decrease,class:() => styles.minus}}]},{type:'slot',props:{name:'after'},children:[{type:Icon.Icon,props:{icon:'plus',onclick:increase,class:() => styles.minus}}]},hint && {type:'slot',children:[hint]}]});
}

exports.InputNumber = InputNumber;
