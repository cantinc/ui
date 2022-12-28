import { use, Ref } from '@innet/dom';
import { State, Cache, Watch, unwatch, onDestroy } from 'watch-state';
import '../../../hooks/index.es6.js';
import { useForm } from '../../../hooks/forms/useForm/useForm.es6.js';

function createDynamicState(value) {
    if (value instanceof State)
        return value;
    if (value instanceof Cache || typeof value === 'function') {
        const state = new State();
        new Watch(() => {
            state.value = use(value);
        });
        return state;
    }
    return new State(value);
}
function FormHidden({ name, value }) {
    const form = useForm();
    if (!form)
        return;
    const defaultValue = unwatch(() => use(value));
    const state = createDynamicState(value);
    const field = {
        name,
        defaultValue,
        element: new Ref(),
        state,
        error: new State(''),
    };
    form.fields.add(field);
    onDestroy(() => {
        if (!form.destroyed) {
            form.fields.delete(field);
        }
    });
}

export { FormHidden };
