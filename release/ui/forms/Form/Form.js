'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var utils = require('@cantinc/utils');
var dom = require('@innet/dom');
var jsx = require('@innet/jsx');
var watchState = require('watch-state');
require('../../../hooks/index.js');
require('../../../utils/index.js');
require('../../layout/index.js');
require('../../popups/index.js');
var helpers = require('../../popups/Notifications/helpers.js');
var parseForm = require('../../../utils/parseForm/parseForm.js');
var useForm = require('../../../hooks/forms/useForm/useForm.js');
var Flex = require('../../layout/Flex/Flex.js');

const formErrorHandler = new jsx.Context(({ error }) => error);
const formInvalidHandler = new jsx.Context(() => { });
const formActionHandler = new jsx.Context(() => { });
const formNotificationHandler = new jsx.Context(({ notification }) => notification && helpers.notify(notification, 'success'));
function Form(_a = {}) {
    var { loading = new watchState.State(false), action, notification, method = 'POST', onsuccess, onerror, onreset, onsubmit, validation: validationProp, oninvalid, ref = new dom.Ref() } = _a, props = tslib.__rest(_a, ["loading", "action", "notification", "method", "onsuccess", "onerror", "onreset", "onsubmit", "validation", "oninvalid", "ref"]);
    const children = jsx.useChildren();
    const errorHandler = jsx.useContext(formErrorHandler);
    const invalidHandler = jsx.useContext(formInvalidHandler);
    const actionHandler = jsx.useContext(formActionHandler);
    const notificationHandler = jsx.useContext(formNotificationHandler);
    const form = Object.assign(Object.assign({}, props), { fields: new Set(), destroyed: false, loading,
        ref,
        method,
        notification,
        action, validation: validationProp || {} });
    watchState.onDestroy(() => {
        form.destroyed = true;
    });
    const handleSuccess = (responseData) => {
        form.responseData = responseData;
        if (notification) {
            notificationHandler(form);
        }
        onsuccess === null || onsuccess === void 0 ? void 0 : onsuccess(form);
    };
    const setValidationError = (error, field) => tslib.__awaiter(this, void 0, void 0, function* () {
        field.error.value = yield errorHandler(error, form);
    });
    const validate = () => {
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
        if (result)
            return result;
        const error = utils.validation(form.validation, form.submitData);
        if (error) {
            invalidHandler(error, form);
            oninvalid === null || oninvalid === void 0 ? void 0 : oninvalid(error, form);
            return error;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        form.submitData = parseForm.parseForm(form);
        onsubmit === null || onsubmit === void 0 ? void 0 : onsubmit(e);
        const error = validate();
        if (error)
            return;
        if (action) {
            const result = actionHandler(form);
            if (result) {
                if (result instanceof Promise) {
                    loading.value = true;
                    result
                        .then(data => handleSuccess(data), e => onerror === null || onerror === void 0 ? void 0 : onerror(form, e))
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
exports.formInvalidHandler = formInvalidHandler;
exports.formNotificationHandler = formNotificationHandler;
