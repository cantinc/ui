import { __rest } from 'tslib';
import { use } from '@innet/dom';
import { UIValidationErrors } from '../../../constants/validation.es6.js';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import '../../interaction/index.es6.js';
import { getExtension } from '../../../utils/file/getExtension/getExtension.es6.js';
import { useForm } from '../../../hooks/forms/useForm/useForm.es6.js';
import { useField } from '../../../hooks/forms/useField/useField.es6.js';
import { Upload } from '../../interaction/Upload/Upload.es6.js';

function FormUpload(props) {
    const { ref, onchange, disabled, validation = [], defaultValue, hint, accept, name } = props, rest = __rest(props, ["ref", "onchange", "disabled", "validation", "defaultValue", "hint", "accept", "name"]);
    if (accept) {
        props.validation = [
            (values) => {
                const currentAccept = use(accept);
                if (currentAccept) {
                    const parsedAccept = currentAccept.split(',').map(ext => ext.trim());
                    for (let i = 0; i < values.length; i++) {
                        const value = values[i];
                        const ext = getExtension(value);
                        if (parsedAccept.includes(`.${ext}`))
                            continue;
                        return {
                            error: UIValidationErrors.extension,
                            data: {
                                key: name,
                                accept,
                            },
                        };
                    }
                }
            },
            ...validation,
        ];
    }
    const { loading } = useForm();
    const { error, element, state } = useField([], ref);
    return ({type:Upload,props:{...rest,accept:accept,name:name,ref:element,onchange:(files) => {
            error.value = '';
            state.value = files.map(({ file }) => file).filter(file => file);
            onchange === null || onchange === void 0 ? void 0 : onchange(state.value);
        },error:() => Boolean(error.value),disabled:() => { var _a; return (_a = use(disabled)) !== null && _a !== void 0 ? _a : loading.value; },hint:() => error.value || hint}});
}

export { FormUpload };
