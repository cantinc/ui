'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');
var watchState = require('watch-state');
require('../../../hooks/index.js');
var useForm = require('../../../hooks/forms/useForm/useForm.js');

function createDynamicState(value) {
    if (value instanceof watchState.State)
        return value;
    if (value instanceof watchState.Cache || typeof value === 'function') {
        const state = new watchState.State();
        new watchState.Watch(() => {
            state.value = dom.use(value);
        });
        return state;
    }
    return new watchState.State(value);
}
function FormHidden({ name, value }) {
    const form = useForm.useForm();
    if (!form)
        return;
    const defaultValue = watchState.unwatch(() => dom.use(value));
    const state = createDynamicState(value);
    const field = {
        name,
        defaultValue,
        element: new dom.Ref(),
        state,
        error: new watchState.State(''),
    };
    form.fields.add(field);
    watchState.onDestroy(() => {
        if (!form.destroyed) {
            form.fields.delete(field);
        }
    });
}

exports.FormHidden = FormHidden;
