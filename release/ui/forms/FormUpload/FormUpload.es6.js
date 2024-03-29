import { __rest } from 'tslib';
import { use, inject } from '@innet/dom';
import { State } from 'watch-state';
import { UIValidationErrors } from '../../../constants/validation.es6.js';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import '../../interaction/index.es6.js';
import { useChildrenProvider } from '../../../hooks/useChildrenProvider/useChildrenProvider.es6.js';
import { actionProp } from '../../../utils/actionProp/actionProp.es6.js';
import { getExtension } from '../../../utils/file/getExtension/getExtension.es6.js';
import { useForm } from '../../../hooks/forms/useForm/useForm.es6.js';
import { useField } from '../../../hooks/forms/useField/useField.es6.js';
import { Upload } from '../../interaction/Upload/Upload.es6.js';

function FormUpload(props) {
    const provideChildren = useChildrenProvider();
    const { inputRef, disabled, validation = [], defaultValue, hint, accept, name, files = new State([]), required, clearable, onchange = actionProp(files, props.onchange) } = props, rest = __rest(props, ["inputRef", "disabled", "validation", "defaultValue", "hint", "accept", "name", "files", "required", "clearable", "onchange"]);
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
    const { error, element, state } = useField([], inputRef);
    const handleChange = (files) => {
        error.value = '';
        onchange === null || onchange === void 0 ? void 0 : onchange(files);
    };
    return provideChildren({type:Upload,props:{...rest,clearable:clearable || inject(required, required => !required),files:state,accept:accept,name:name,inputRef:element,onchange:handleChange,error:() => Boolean(error.value),disabled:() => { var _a; return (_a = use(disabled)) !== null && _a !== void 0 ? _a : loading.value; },hint:() => error.value || hint}});
}

export { FormUpload };
