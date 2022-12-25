'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
require('../../../hooks/index.js');
require('../../interaction/index.js');
var useForm = require('../../../hooks/forms/useForm/useForm.js');
var useField = require('../../../hooks/forms/useField/useField.js');
var Radiobox = require('../../interaction/Radiobox/Radiobox.js');

function FormRadiobox(_a) {
    var { disabled, onchange, defaultValue, validation } = _a, props = tslib.__rest(_a, ["disabled", "onchange", "defaultValue", "validation"]);
    const { loading } = useForm.useForm();
    const { state } = useField.useField('');
    return ({type:Radiobox.Radiobox,props:{...props,value:state,disabled:() => dom.use(disabled) || dom.use(loading),onchange:value => {
            state.value = value;
            onchange === null || onchange === void 0 ? void 0 : onchange(value);
        }}});
}

exports.FormRadiobox = FormRadiobox;
