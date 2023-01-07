'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../interaction/index.js');
var useForm = require('../../../hooks/forms/useForm/useForm.js');
var useField = require('../../../hooks/forms/useField/useField.js');
var InputMask = require('../../interaction/InputMask/InputMask.js');

function FormInputMask(_a) {
    var { inputRef, onchange, disabled, validation } = _a, props = tslib.__rest(_a, ["inputRef", "onchange", "disabled", "validation"]);
    const { before, after, hint } = jsx.useSlots();
    const { loading } = useForm.useForm();
    const { state, error, element } = useField.useField('', inputRef);
    return ({type:InputMask.InputMask,props:{...props,inputRef:element,oninput:(value) => {
            state.value = value;
            error.value = '';
            onchange === null || onchange === void 0 ? void 0 : onchange(value);
        },error:() => Boolean(error.value),value:() => state.value,disabled:() => { var _a; return (_a = dom.use(disabled)) !== null && _a !== void 0 ? _a : loading.value; }},children:[before && {type:'slot',props:{name:'before'},children:[before]},' ',after && {type:'slot',props:{name:'after'},children:[after]},{type:'slot',props:{name:'hint'},children:[() => error.value || hint]}]});
}

exports.FormInputMask = FormInputMask;
