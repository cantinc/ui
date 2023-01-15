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
const formNotificationHandler = new jsx.Context(notification => helpers.notify(notification, 'success'));
function Form(_a = {}) {
    var { loading = new watchState.State(false), action, notification, method = 'POST', onsuccess, onerror, onreset, onsubmit, ref = new dom.Ref() } = _a, props = tslib.__rest(_a, ["loading", "action", "notification", "method", "onsuccess", "onerror", "onreset", "onsubmit", "ref"]);
    const children = jsx.useChildren();
    const errorHandler = jsx.useContext(formErrorHandler);
    const actionHandler = jsx.useContext(formActionHandler);
    const notificationHandler = jsx.useContext(formNotificationHandler);
    const form = {
        fields: new Set(),
        destroyed: false,
        loading,
        ref,
    };
    watchState.onDestroy(() => {
        form.destroyed = true;
    });
    const handleSuccess = (action, data) => {
        if (notification) {
            notificationHandler(notification, form, data, action, method);
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
        onsubmit === null || onsubmit === void 0 ? void 0 : onsubmit(e);
        const error = validation();
        if (error)
            return;
        if (action) {
            const currentAction = dom.use(action);
            const result = actionHandler(currentAction, form, method);
            if (result) {
                if (result instanceof Promise) {
                    loading.value = true;
                    result
                        .then(data => handleSuccess(currentAction, data), e => onerror === null || onerror === void 0 ? void 0 : onerror(form, e))
                        .finally(() => {
                        loading.value = false;
                    });
                }
                else {
                    handleSuccess(currentAction, result);
                }
            }
            else {
                handleSuccess(currentAction);
            }
        }
        else {
            handleSuccess();
        }
    };
    const handleReset = (e) => {
        e.preventDefault();
        onreset === null || onreset === void 0 ? void 0 : onreset(e);
        for (const { state, defaultValue, error } of form.fields) {
            state.value = defaultValue;
            error.value = '';
        }
    };
    return ({type:'context',props:{for:useForm.formContext,set:form},children:[{type:Flex.Flex,props:{vertical:true,align:'stretch',novalidate:true,...props,ref:ref,element:'form',action:action,onsubmit:handleSubmit,onreset:handleReset},children:[children]}]});
}

exports.Form = Form;
exports.formActionHandler = formActionHandler;
exports.formErrorHandler = formErrorHandler;
exports.formNotificationHandler = formNotificationHandler;
