'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');

function parseForm(form) {
    const data = {};
    const arrayData = {};
    for (const field of form.fields) {
        const { name, state: { value } } = field;
        if (dom.use(form.method) === 'PATCH') {
            if (!form.touched[name]) {
                continue;
            }
        }
        if (name in data) {
            if (name in arrayData) {
                data[name].push(value);
            }
            else {
                arrayData[name] = true;
                data[name] = [data[name], value];
            }
        }
        else {
            data[name] = value;
        }
    }
    return data;
}

exports.parseForm = parseForm;
