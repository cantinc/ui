'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');

function createFormData(form) {
    const body = new FormData();
    for (const field of form.fields) {
        const { value } = field.state;
        if (dom.use(form.method) === 'PATCH') {
            if (field.defaultValue === value) {
                continue;
            }
        }
        if (Array.isArray(value)) {
            value.forEach(value => body.append(field.name, value));
            continue;
        }
        body.append(field.name, value);
    }
    return body;
}

exports.createFormData = createFormData;
