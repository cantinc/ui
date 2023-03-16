import { required, optional } from '@cantinc/utils';
import { Ref } from '@innet/dom';
import { useProps } from '@innet/jsx';
import { State, Watch, onDestroy } from 'watch-state';
import '../useForm/index.es6.js';
import { useForm } from '../useForm/useForm.es6.js';

function useField(defValue, ref = new Ref()) {
    const form = useForm();
    const { name, defaultValue = defValue, required: req = false, removeValue, validation, value = new State(defaultValue), } = useProps();
    const field = {
        name,
        defaultValue,
        state: value,
        error: new State(),
        element: ref,
        removed: false,
        validation: req ? required(validation) : validation ? optional(validation) : validation,
    };
    new Watch(() => {
        if (field.state.value !== defaultValue) {
            form.touched[name] = true;
        }
    });
    if (form) {
        form.fields.add(field);
        onDestroy(() => {
            if (form.destroyed)
                return;
            if (removeValue !== undefined) {
                field.removed = true;
                form.touched[field.name] = true;
                field.state.value = removeValue;
            }
            else {
                form.fields.delete(field);
            }
        });
    }
    return field;
}

export { useField };
