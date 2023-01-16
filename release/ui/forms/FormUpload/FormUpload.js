'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var watchState = require('watch-state');
var validation = require('../../../constants/validation.js');
require('../../../hooks/index.js');
require('../../../utils/index.js');
require('../../interaction/index.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var getExtension = require('../../../utils/file/getExtension/getExtension.js');
var useForm = require('../../../hooks/forms/useForm/useForm.js');
var useField = require('../../../hooks/forms/useField/useField.js');
var Upload = require('../../interaction/Upload/Upload.js');

function FormUpload(props) {
    const { ref, disabled, validation: validation$1 = [], defaultValue, hint, accept, name, files = new watchState.State([]), onchange = actionProp.actionProp(files, props.onchange) } = props, rest = tslib.__rest(props, ["ref", "disabled", "validation", "defaultValue", "hint", "accept", "name", "files", "onchange"]);
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
    const handleChange = (files) => {
        error.value = '';
        onchange === null || onchange === void 0 ? void 0 : onchange(files);
    };
    return ({type:Upload.Upload,props:{...rest,files:state,accept:accept,name:name,ref:element,onchange:handleChange,error:() => Boolean(error.value),disabled:() => { var _a; return (_a = dom.use(disabled)) !== null && _a !== void 0 ? _a : loading.value; },hint:() => error.value || hint}});
}

exports.FormUpload = FormUpload;
