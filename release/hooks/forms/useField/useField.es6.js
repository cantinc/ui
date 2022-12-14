import { required } from '@cantinc/utils';
import { Ref } from '@innet/dom';
import { useProps } from '@innet/jsx';
import { State, onDestroy } from 'watch-state';
import '../useForm/index.es6.js';
import { useForm } from '../useForm/useForm.es6.js';

function useField(defValue, ref = new Ref()) {
    const form = useForm();
    const { name, defaultValue = defValue, required: req = false, validation, } = useProps();
    const field = {
        name,
        defaultValue,
        state: new State(defaultValue),
        error: new State(),
        element: ref,
        validation: req ? required(validation) : validation,
    };
    if (form) {
        form.fields.add(field);
        onDestroy(() => {
            if (!form.destroyed) {
                form.fields.delete(field);
            }
        });
    }
    return field;
}

export { useField };
