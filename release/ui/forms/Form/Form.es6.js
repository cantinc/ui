import { __rest, __awaiter } from 'tslib';
import { use } from '@innet/dom';
import { Context, useChildren, useContext } from '@innet/jsx';
import { State, onDestroy } from 'watch-state';
import '../../../hooks/index.es6.js';
import '../../layout/index.es6.js';
import '../../popups/index.es6.js';
import { notify } from '../../popups/Notifications/helpers.es6.js';
import { formContext } from '../../../hooks/forms/useForm/useForm.es6.js';
import { Flex } from '../../layout/Flex/Flex.es6.js';

const formErrorHandler = new Context(({ error }) => error);
const formActionHandler = new Context(() => { });
const formNotificationHandler = new Context(notification => notify(notification, 'success'));
function Form(_a = {}) {
    var { loading = new State(false), action, notification, method = 'POST', onsuccess, onerror } = _a, props = __rest(_a, ["loading", "action", "notification", "method", "onsuccess", "onerror"]);
    const children = useChildren();
    const errorHandler = useContext(formErrorHandler);
    const actionHandler = useContext(formActionHandler);
    const notificationHandler = useContext(formNotificationHandler);
    const form = {
        fields: new Set(),
        destroyed: false,
        loading,
    };
    onDestroy(() => {
        form.destroyed = true;
    });
    const handleSuccess = (action, data) => {
        if (notification) {
            notificationHandler(notification, form, data, action, method);
        }
        onsuccess === null || onsuccess === void 0 ? void 0 : onsuccess(form);
    };
    const setValidationError = (error, field) => __awaiter(this, void 0, void 0, function* () {
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
            const currentAction = use(action);
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
        for (const { state, defaultValue } of form.fields) {
            state.value = defaultValue;
        }
    };
    return ({type:'context',props:{for:formContext,set:form},children:[{type:Flex,props:{novalidate:true,element:'form',onsubmit:handleSubmit,onreset:handleReset,action:action,vertical:true,align:'stretch',...props},children:[children]}]});
}

export { Form, formActionHandler, formErrorHandler, formNotificationHandler };
