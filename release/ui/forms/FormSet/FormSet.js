'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../../../hooks/index.js');
require('../../../utils/index.js');
require('../../interaction/index.js');
var useForm = require('../../../hooks/forms/useForm/useForm.js');
var actionProp = require('../../../utils/actionProp/actionProp.js');
var Set = require('../../interaction/Set/Set.js');

function FormSet(_a) {
    var { defaultValues = [], value = new watchState.State(defaultValues), onchange } = _a, props = tslib.__rest(_a, ["defaultValues", "value", "onchange"]);
    const children = jsx.useChildren();
    const form = useForm.useForm();
    const formElement = form.ref.value;
    onchange = actionProp.actionProp(value, onchange);
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
    return ({type:Set.Set,props:{...props,value:value,onchange:onchange},children:[children]});
}

exports.FormSet = FormSet;
