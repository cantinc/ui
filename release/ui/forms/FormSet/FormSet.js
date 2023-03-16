'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var utils = require('@cantinc/utils');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../../../hooks/index.js');
require('../../../utils/index.js');
require('../../interaction/index.js');
var useForm = require('../../../hooks/forms/useForm/useForm.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var Set = require('../../interaction/Set/Set.js');

function FormSet(_a) {
    var { defaultValues = [], removeValue, value = new watchState.State(defaultValues = defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues.map(props => (Object.assign(Object.assign({}, props), { removeValue })))), onchange, requiredSet, name } = _a, props = tslib.__rest(_a, ["defaultValues", "removeValue", "value", "onchange", "requiredSet", "name"]);
    const children = jsx.useChildren();
    const form = useForm.useForm();
    const formElement = form.ref.value;
    onchange = actionProp.actionProp(value, onchange);
    if (requiredSet) {
        const setName = form.method === 'PATCH'
            ? (name) => {
                form.validation[name] = [(value, key) => {
                        if (!value || (Array.isArray(value) && !value.length)) {
                            return {
                                error: utils.ValidationErrors.required,
                                data: {
                                    key,
                                },
                            };
                        }
                    }];
            }
            : (name) => {
                form.validation[name] = utils.required(form.validation[name]);
            };
        if (Array.isArray(name)) {
            name.forEach(setName);
        }
        else if (name) {
            setName(name);
        }
    }
    if (formElement && onchange) {
        const resetListener = () => {
            onchange === null || onchange === void 0 ? void 0 : onchange(defaultValues);
        };
        formElement.addEventListener('reset', resetListener);
        watchState.onDestroy(() => {
            if (!form.destroyed) {
                formElement.removeEventListener('reset', resetListener);
            }
        });
    }
    return ({type:Set.Set,props:{...props,name:name,value:value,onchange:onchange},children:[children]});
}

exports.FormSet = FormSet;
