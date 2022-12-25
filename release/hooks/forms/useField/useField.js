'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@cantinc/utils');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../useForm/index.js');
var useForm = require('../useForm/useForm.js');

function useField(defValue, ref = new dom.Ref()) {
    const form = useForm.useForm();
    const { name, defaultValue = defValue, required: req = false, validation, } = jsx.useProps();
    const field = {
        name,
        defaultValue,
        state: new watchState.State(defaultValue),
        error: new watchState.State(),
        element: ref,
        validation: req ? utils.required(validation) : validation,
    };
    if (form) {
        form.fields.add(field);
        watchState.onDestroy(() => {
            if (!form.destroyed) {
                form.fields.delete(field);
            }
        });
    }
    return field;
}

exports.useField = useField;
