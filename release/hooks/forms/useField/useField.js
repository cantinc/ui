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
    const { name, defaultValue = defValue, required: req = false, removeValue, validation, value = new watchState.State(defaultValue), } = jsx.useProps();
    const field = {
        name,
        defaultValue,
        state: value,
        error: new watchState.State(),
        element: ref,
        removed: false,
        validation: req ? utils.required(validation) : validation ? utils.optional(validation) : validation,
    };
    new watchState.Watch(() => {
        if (field.state.value !== defaultValue) {
            form.touched[name] = true;
        }
    });
    if (form) {
        form.fields.add(field);
        watchState.onDestroy(() => {
            if (form.destroyed)
                return;
            if (removeValue !== undefined) {
                field.removed = true;
                form.touched[field.name] = true;
                field.state.value = removeValue;
            }
            else {
                form.fields.delete(field);
            }
        });
    }
    return field;
}

exports.useField = useField;
