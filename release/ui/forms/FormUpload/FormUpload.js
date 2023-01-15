'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var validation = require('../../../constants/validation.js');
require('../../../hooks/index.js');
require('../../../utils/index.js');
require('../../interaction/index.js');
var getExtension = require('../../../utils/file/getExtension/getExtension.js');
var useForm = require('../../../hooks/forms/useForm/useForm.js');
var useField = require('../../../hooks/forms/useField/useField.js');
var Upload = require('../../interaction/Upload/Upload.js');

function FormUpload(props) {
    const { ref, onchange, disabled, validation: validation$1 = [], defaultValue, hint, accept, name } = props, rest = tslib.__rest(props, ["ref", "onchange", "disabled", "validation", "defaultValue", "hint", "accept", "name"]);
    if (accept) {
        props.validation = [
            (values) => {
                const currentAccept = dom.use(accept);
                if (currentAccept) {
                    const parsedAccept = currentAccept.split(',').map(ext => ext.trim());
                    for (let i = 0; i < values.length; i++) {
                        const value = values[i];
                        const ext = getExtension.getExtension(value);
                        if (parsedAccept.includes(`.${ext}`))
                            continue;
                        return {
                            error: validation.UIValidationErrors.extension,
                            data: {
                                key: name,
                                accept,
                            },
                        };
                    }
                }
            },
            ...validation$1,
        ];
    }
    const { loading } = useForm.useForm();
    const { error, element, state } = useField.useField([], ref);
    return ({type:Upload.Upload,props:{...rest,accept:accept,name:name,ref:element,onchange:(files) => {
            error.value = '';
            state.value = files.map(({ file }) => file).filter(file => file);
            onchange === null || onchange === void 0 ? void 0 : onchange(state.value);
        },error:() => Boolean(error.value),disabled:() => { var _a; return (_a = dom.use(disabled)) !== null && _a !== void 0 ? _a : loading.value; },hint:() => error.value || hint}});
}

exports.FormUpload = FormUpload;
