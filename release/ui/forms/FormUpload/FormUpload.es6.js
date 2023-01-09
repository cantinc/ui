import { __rest } from 'tslib';
import { use } from '@innet/dom';
import '../../../hooks/index.es6.js';
import '../../interaction/index.es6.js';
import { useForm } from '../../../hooks/forms/useForm/useForm.es6.js';
import { useField } from '../../../hooks/forms/useField/useField.es6.js';
import { Upload } from '../../interaction/Upload/Upload.es6.js';

function FormUpload(_a) {
    var { ref, onchange, disabled, validation, defaultValue, hint } = _a, props = __rest(_a, ["ref", "onchange", "disabled", "validation", "defaultValue", "hint"]);
    const { loading } = useForm();
    const { error, element, state } = useField([], ref);
    return ({type:Upload,props:{...props,ref:element,onchange:(files) => {
            error.value = '';
            state.value = files.map(({ file }) => file).filter(file => file);
            onchange === null || onchange === void 0 ? void 0 : onchange(state.value);
        },error:() => Boolean(error.value),disabled:() => { var _a; return (_a = use(disabled)) !== null && _a !== void 0 ? _a : loading.value; },hint:() => error.value || hint}});
}

export { FormUpload };
