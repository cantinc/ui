'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
require('../../../hooks/index.js');
require('../../interaction/index.js');
var useForm = require('../../../hooks/forms/useForm/useForm.js');
var useField = require('../../../hooks/forms/useField/useField.js');
var Upload = require('../../interaction/Upload/Upload.js');

function FormUpload(_a) {
    var { ref, onchange, disabled, validation, defaultValue, hint } = _a, props = tslib.__rest(_a, ["ref", "onchange", "disabled", "validation", "defaultValue", "hint"]);
    const { loading } = useForm.useForm();
    const { error, element, state } = useField.useField([], ref);
    return ({type:Upload.Upload,props:{...props,ref:element,onchange:(files) => {
            error.value = '';
            state.value = files.map(({ file }) => file).filter(file => file);
            onchange === null || onchange === void 0 ? void 0 : onchange(state.value);
        },error:() => Boolean(error.value),disabled:() => { var _a; return (_a = dom.use(disabled)) !== null && _a !== void 0 ? _a : loading.value; },hint:() => error.value || hint}});
}

exports.FormUpload = FormUpload;
