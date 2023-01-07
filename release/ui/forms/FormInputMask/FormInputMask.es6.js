import { __rest } from 'tslib';
import { use } from '@innet/dom';
import { useSlots } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../interaction/index.es6.js';
import { useForm } from '../../../hooks/forms/useForm/useForm.es6.js';
import { useField } from '../../../hooks/forms/useField/useField.es6.js';
import { InputMask } from '../../interaction/InputMask/InputMask.es6.js';

function FormInputMask(_a) {
    var { inputRef, onchange, disabled, validation } = _a, props = __rest(_a, ["inputRef", "onchange", "disabled", "validation"]);
    const { before, after, hint } = useSlots();
    const { loading } = useForm();
    const { state, error, element } = useField('', inputRef);
    return ({type:InputMask,props:{...props,inputRef:element,oninput:(value) => {
            state.value = value;
            error.value = '';
            onchange === null || onchange === void 0 ? void 0 : onchange(value);
        },error:() => Boolean(error.value),value:() => state.value,disabled:() => { var _a; return (_a = use(disabled)) !== null && _a !== void 0 ? _a : loading.value; }},children:[before && {type:'slot',props:{name:'before'},children:[before]},' ',after && {type:'slot',props:{name:'after'},children:[after]},{type:'slot',props:{name:'hint'},children:[() => error.value || hint]}]});
}

export { FormInputMask };
