import { __rest } from 'tslib';
import { required } from '@cantinc/utils';
import { useChildren } from '@innet/jsx';
import { State, onDestroy } from 'watch-state';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import '../../interaction/index.es6.js';
import { useForm } from '../../../hooks/forms/useForm/useForm.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { Set } from '../../interaction/Set/Set.es6.js';

function FormSet(_a) {
    var { defaultValues = [], value = new State(defaultValues), onchange, requiredSet, name } = _a, props = __rest(_a, ["defaultValues", "value", "onchange", "requiredSet", "name"]);
    const children = useChildren();
    const form = useForm();
    const formElement = form.ref.value;
    onchange = actionProp(value, onchange);
    if (requiredSet) {
        form.validation[name] = required(form.validation[name]);
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
