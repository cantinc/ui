'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../utils/index.js');
require('../../interaction/index.js');
var useForm = require('../../../hooks/forms/useForm/useForm.js');
var useField = require('../../../hooks/forms/useField/useField.js');
var InputDate = require('../../interaction/InputDate/InputDate.js');
var inputDateFormat = require('../../../utils/date/inputDateFormat/inputDateFormat.js');

function FormInputDate(_a) {
    var { inputRef, onchange, disabled, validation } = _a, props = tslib.__rest(_a, ["inputRef", "onchange", "disabled", "validation"]);
    const { hint } = jsx.useSlots();
    const { loading } = useForm.useForm();
    const { state, error, element } = useField.useField('', inputRef);
    return ({type:InputDate.InputDate,props:{...props,inputRef:element,oninput:(value) => {
            const newValue = value ? inputDateFormat.inputDateFormat(value) : '';
            state.value = newValue;
            error.value = '';
            onchange === null || onchange === void 0 ? void 0 : onchange(newValue);
        },error:() => Boolean(error.value),value:() => state.value ? new Date(state.value) : undefined,disabled:() => { var _a; return (_a = dom.use(disabled)) !== null && _a !== void 0 ? _a : loading.value; }},children:[{type:'slot',props:{name:'hint'},children:[() => error.value || hint]}]});
}

exports.FormInputDate = FormInputDate;
