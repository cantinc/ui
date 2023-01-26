import { __rest } from 'tslib';
import { use } from '@innet/dom';
import { useSlots } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import '../../interaction/index.es6.js';
import { useForm } from '../../../hooks/forms/useForm/useForm.es6.js';
import { useField } from '../../../hooks/forms/useField/useField.es6.js';
import { InputDate } from '../../interaction/InputDate/InputDate.es6.js';
import { inputDateFormat } from '../../../utils/date/inputDateFormat/inputDateFormat.es6.js';

function FormInputDate(_a) {
    var { inputRef, onchange, disabled, validation } = _a, props = __rest(_a, ["inputRef", "onchange", "disabled", "validation"]);
    const { hint } = useSlots();
    const { loading } = useForm();
    const { state, error, element } = useField('', inputRef);
    return ({type:InputDate,props:{...props,inputRef:element,oninput:(value) => {
            const newValue = value ? inputDateFormat(value) : '';
            state.value = newValue;
            error.value = '';
            onchange === null || onchange === void 0 ? void 0 : onchange(newValue);
        },error:() => Boolean(error.value),value:() => state.value ? new Date(state.value) : undefined,disabled:() => { var _a; return (_a = use(disabled)) !== null && _a !== void 0 ? _a : loading.value; }},children:[{type:'slot',props:{name:'hint'},children:[() => error.value || hint]}]});
}

export { FormInputDate };
