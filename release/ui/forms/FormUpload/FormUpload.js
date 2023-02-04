'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var watchState = require('watch-state');
var validation = require('../../../constants/validation.js');
require('../../../hooks/index.js');
require('../../../utils/index.js');
require('../../interaction/index.js');
var useChildrenProvider = require('../../../hooks/useChildrenProvider/useChildrenProvider.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var getExtension = require('../../../utils/file/getExtension/getExtension.js');
var useForm = require('../../../hooks/forms/useForm/useForm.js');
var useField = require('../../../hooks/forms/useField/useField.js');
var Upload = require('../../interaction/Upload/Upload.js');

function FormUpload(props) {
    const provideChildren = useChildrenProvider.useChildrenProvider();
    const { inputRef, disabled, validation: validation$1 = [], defaultValue, hint, accept, name, files = new watchState.State([]), required, clearable, onchange = actionProp.actionProp(files, props.onchange) } = props, rest = tslib.__rest(props, ["inputRef", "disabled", "validation", "defaultValue", "hint", "accept", "name", "files", "required", "clearable", "onchange"]);
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
    const { error, element, state } = useField.useField([], inputRef);
    const handleChange = (files) => {
        error.value = '';
        onchange === null || onchange === void 0 ? void 0 : onchange(files);
    };
    return provideChildren({type:Upload.Upload,props:{...rest,clearable:clearable || dom.inject(required, required => !required),files:state,accept:accept,name:name,inputRef:element,onchange:handleChange,error:() => Boolean(error.value),disabled:() => { var _a; return (_a = dom.use(disabled)) !== null && _a !== void 0 ? _a : loading.value; },hint:() => error.value || hint}});
}

exports.FormUpload = FormUpload;
