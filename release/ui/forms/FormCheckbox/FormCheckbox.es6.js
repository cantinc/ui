import { __rest } from 'tslib';
import '../../../hooks/index.es6.js';
import '../../interaction/index.es6.js';
import { useForm } from '../../../hooks/forms/useForm/useForm.es6.js';
import { useField } from '../../../hooks/forms/useField/useField.es6.js';
import { Checkbox } from '../../interaction/Checkbox/Checkbox.es6.js';

function FormCheckbox(_a) {
    var { ref, disabled, onchange } = _a, props = __rest(_a, ["ref", "disabled", "onchange"]);
    const { loading } = useForm();
    const { state, element } = useField('false', ref);
    return ({type:Checkbox,props:{...props,ref:element,checked:() => state.value === 'true',disabled:disabled || (() => loading.value),onchange:value => {
            state.value = value ? 'true' : 'false';
            onchange === null || onchange === void 0 ? void 0 : onchange(state.value);
        }}});
}

export { FormCheckbox };
