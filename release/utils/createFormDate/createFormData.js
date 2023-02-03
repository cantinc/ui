'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function appendFormDate(body, key, value) {
    if (typeof value === 'string') {
        body.append(key, value);
        return;
    }
    if (Array.isArray(value)) {
        value.forEach(value => appendFormDate(body, key, value));
        return;
    }
    if (value === null) {
        body.append(key, '');
        return;
    }
    if (value instanceof File) {
        body.append(key, value);
        return;
    }
    if (typeof value === 'object' && value.src && value.name) {
        body.append(key, new File([''], value.name));
    }
}
function createFormData(form) {
    const body = new FormData();
    for (const name in form.submitData) {
        appendFormDate(body, name, form.submitData[name]);
    }
    return body;
}

exports.appendFormDate = appendFormDate;
exports.createFormData = createFormData;
