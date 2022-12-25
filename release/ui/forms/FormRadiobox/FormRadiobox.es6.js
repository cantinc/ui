import { __rest } from 'tslib';
import { use } from '@innet/dom';
import '../../../hooks/index.es6.js';
import '../../interaction/index.es6.js';
import { useForm } from '../../../hooks/forms/useForm/useForm.es6.js';
import { useField } from '../../../hooks/forms/useField/useField.es6.js';
import { Radiobox } from '../../interaction/Radiobox/Radiobox.es6.js';

function FormRadiobox(_a) {
    var { disabled, onchange, defaultValue, validation } = _a, props = __rest(_a, ["disabled", "onchange", "defaultValue", "validation"]);
    const { loading } = useForm();
    const { state } = useField('');
    return ({type:Radiobox,props:{...props,value:state,disabled:() => use(disabled) || use(loading),onchange:value => {
            state.value = value;
            onchange === null || onchange === void 0 ? void 0 : onchange(value);
        }}});
}

export { FormRadiobox };
