import { __rest } from 'tslib';
import { use } from '@innet/dom';
import { useSlots } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../interaction/index.es6.js';
import { useForm } from '../../../hooks/forms/useForm/useForm.es6.js';
import { useField } from '../../../hooks/forms/useField/useField.es6.js';
import { Selector } from '../../interaction/Selector/Selector.es6.js';

function FormSelector(_a) {
    var { validation, disabled, inputRef, onchange } = _a, props = __rest(_a, ["validation", "disabled", "inputRef", "onchange"]);
    const { '': children, before, after, hint } = useSlots();
    const { loading } = useForm();
    const { state, error, element } = useField('', inputRef);
    return ({type:Selector,props:{...props,inputRef:element,oninput:(value) => {
            state.value = value;
            error.value = '';
            onchange === null || onchange === void 0 ? void 0 : onchange(value);
        },error:() => Boolean(error.value),value:() => state.value,disabled:(() => { var _a; return (_a = use(disabled)) !== null && _a !== void 0 ? _a : loading.value; })},children:[before && {type:'slot',props:{name:'before'},children:[before]},' ',after && {type:'slot',props:{name:'after'},children:[after]},{type:'slot',props:{name:'hint'},children:[() => error.value || hint]},children]});
}

export { FormSelector };
