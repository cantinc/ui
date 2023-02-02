import { __rest, __awaiter } from 'tslib';
import { validation } from '@cantinc/utils';
import { Ref } from '@innet/dom';
import { Context, useChildren, useContext } from '@innet/jsx';
import { State, onDestroy } from 'watch-state';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import '../../layout/index.es6.js';
import '../../popups/index.es6.js';
import { notify } from '../../popups/Notifications/helpers.es6.js';
import { parseForm } from '../../../utils/parseForm/parseForm.es6.js';
import { formContext } from '../../../hooks/forms/useForm/useForm.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const formErrorHandler = new Context(({ error }) => error);
const formInvalidHandler = new Context(() => { });
const formActionHandler = new Context(() => { });
const formNotificationHandler = new Context(({ notification }) => notification && notify(notification, 'success'));
function Form(_a = {}) {
    var { loading = new State(false), action, notification, method = 'POST', onsuccess, onerror, onreset, onsubmit, validation: validationProp, oninvalid, ref = new Ref() } = _a, props = __rest(_a, ["loading", "action", "notification", "method", "onsuccess", "onerror", "onreset", "onsubmit", "validation", "oninvalid", "ref"]);
    const children = useChildren();
    const errorHandler = useContext(formErrorHandler);
    const invalidHandler = useContext(formInvalidHandler);
    const actionHandler = useContext(formActionHandler);
    const notificationHandler = useContext(formNotificationHandler);
    const form = Object.assign(Object.assign({}, props), { fields: new Set(), destroyed: false, loading,
        ref,
        method,
        notification,
        action, validation: validationProp || {} });
    onDestroy(() => {
        form.destroyed = true;
    });
    const handleSuccess = (responseData) => {
        form.responseData = responseData;
        if (notification) {
            notificationHandler(form);
        }
        onsuccess === null || onsuccess === void 0 ? void 0 : onsuccess(form);
    };
    const setValidationError = (error, field) => __awaiter(this, void 0, void 0, function* () {
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
        const error = validation(form.validation, form.submitData);
        if (error) {
            invalidHandler(error, form);
            oninvalid === null || oninvalid === void 0 ? void 0 : oninvalid(error, form);
            return error;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        form.submitData = parseForm(form);
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
    return ({type:'context',props:{for:formContext,set:form},children:[{type:Flex,props:{vertical:true,align:'stretch',novalidate:true,...props,ref:ref,element:'form',action:action,onsubmit:handleSubmit,onreset:handleReset},children:[children]}]});
}

export { Form, formActionHandler, formErrorHandler, formInvalidHandler, formNotificationHandler };
