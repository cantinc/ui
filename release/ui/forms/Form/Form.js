'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../../../hooks/index.js');
require('../../layout/index.js');
require('../../popups/index.js');
var helpers = require('../../popups/Notifications/helpers.js');
var useForm = require('../../../hooks/forms/useForm/useForm.js');
var Flex = require('../../layout/Flex/Flex.js');

const formErrorHandler = new jsx.Context(({ error }) => error);
const formActionHandler = new jsx.Context(() => { });
function Form(_a = {}) {
    var { loading = new watchState.State(false), action, notification, method = 'POST', onsuccess, onerror } = _a, props = tslib.__rest(_a, ["loading", "action", "notification", "method", "onsuccess", "onerror"]);
    const children = jsx.useChildren();
    const errorHandler = jsx.useContext(formErrorHandler);
    const actionHandler = jsx.useContext(formActionHandler);
    const form = {
        fields: new Set(),
        destroyed: false,
        loading,
    };
    watchState.onDestroy(() => {
        form.destroyed = true;
    });
    const handleSuccess = () => {
        if (notification) {
            helpers.notify(notification, 'success');
        }
        onsuccess === null || onsuccess === void 0 ? void 0 : onsuccess(form);
    };
    const setValidationError = (error, field) => tslib.__awaiter(this, void 0, void 0, function* () {
        field.error.value = yield errorHandler(error, form);
    });
    const validation = () => {
        let result = false;
        const setError = (error, field) => {
            if (!result) {
                field.element.value.scrollIntoView({
                    block: 'center',
                    behavior: 'smooth',
                    inline: 'center',
                });
                field.element.value.focus();
                result = true;
            }
            setValidationError(error, field);
        };
        for (const field of form.fields) {
            const { value } = field.state;
            const key = field.name;
            if (field.validation) {
                for (const validator of field.validation) {
                    const error = validator(value, key, form);
                    if (error) {
                        setError(error, field);
                        continue;
                    }
                }
            }
        }
        return result;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validation();
        if (error)
            return;
        if (action) {
            const result = actionHandler(dom.use(action), form, method);
            if (result) {
                loading.value = true;
                result
                    .then(handleSuccess, e => onerror === null || onerror === void 0 ? void 0 : onerror(form, e))
                    .finally(() => {
                    loading.value = false;
                });
            }
            else {
                handleSuccess();
            }
        }
        else {
            handleSuccess();
        }
    };
    const handleReset = (e) => {
        e.preventDefault();
        for (const { state, defaultValue } of form.fields) {
            state.value = defaultValue;
        }
    };
    return ({type:'context',props:{for:useForm.formContext,set:form},children:[{type:Flex.Flex,props:{novalidate:true,element:'form',onsubmit:handleSubmit,onreset:handleReset,action:action,vertical:true,align:'stretch',...props},children:[children]}]});
}

exports.Form = Form;
exports.formActionHandler = formActionHandler;
exports.formErrorHandler = formErrorHandler;
