'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
require('../../../hooks/index.js');
require('../../interaction/index.js');
var useForm = require('../../../hooks/forms/useForm/useForm.js');
var useField = require('../../../hooks/forms/useField/useField.js');
var Checkbox = require('../../interaction/Checkbox/Checkbox.js');

function FormCheckbox(_a) {
    var { ref, disabled, onchange } = _a, props = tslib.__rest(_a, ["ref", "disabled", "onchange"]);
    const { loading } = useForm.useForm();
    const { state, element } = useField.useField('false', ref);
    return ({type:Checkbox.Checkbox,props:{...props,ref:element,checked:() => state.value === 'true',disabled:disabled || (() => loading.value),onchange:value => {
            state.value = value ? 'true' : 'false';
            onchange === null || onchange === void 0 ? void 0 : onchange(state.value);
        }}});
}

exports.FormCheckbox = FormCheckbox;
