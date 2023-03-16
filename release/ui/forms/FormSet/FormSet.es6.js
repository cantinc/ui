import { __rest } from 'tslib';
import { ValidationErrors, required } from '@cantinc/utils';
import { useChildren } from '@innet/jsx';
import { State, onDestroy } from 'watch-state';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import '../../interaction/index.es6.js';
import { useForm } from '../../../hooks/forms/useForm/useForm.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { Set } from '../../interaction/Set/Set.es6.js';

function FormSet(_a) {
    var { defaultValues = [], removeValue, value = new State(defaultValues = defaultValues === null || defaultValues === void 0 ? void 0 : defaultValues.map(props => (Object.assign(Object.assign({}, props), { removeValue })))), onchange, requiredSet, name } = _a, props = __rest(_a, ["defaultValues", "removeValue", "value", "onchange", "requiredSet", "name"]);
    const children = useChildren();
    const form = useForm();
    const formElement = form.ref.value;
    onchange = actionProp(value, onchange);
    if (requiredSet) {
        const setName = form.method === 'PATCH'
            ? (name) => {
                form.validation[name] = [(value, key) => {
                        if (!value || (Array.isArray(value) && !value.length)) {
                            return {
                                error: ValidationErrors.required,
                                data: {
                                    key,
                                },
                            };
                        }
                    }];
            }
            : (name) => {
                form.validation[name] = required(form.validation[name]);
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
        onDestroy(() => {
            if (!form.destroyed) {
                formElement.removeEventListener('reset', resetListener);
            }
        });
    }
    return ({type:Set,props:{...props,name:name,value:value,onchange:onchange},children:[children]});
}

export { FormSet };
