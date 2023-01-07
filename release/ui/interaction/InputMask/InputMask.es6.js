import { __rest } from 'tslib';
import { Ref } from '@innet/dom';
import Mask from 'inputmask';
import { onDestroy } from 'watch-state';
import '../../../hooks/index.es6.js';
import '../Input/index.es6.js';
import { useChildrenProvider } from '../../../hooks/useChildrenProvider/useChildrenProvider.es6.js';
import { Input } from '../Input/Input.es6.js';

const defaultMask = {
    showMaskOnHover: false,
};
function* InputMask(_a) {
    var { mask, inputRef = new Ref() } = _a, props = __rest(_a, ["mask", "inputRef"]);
    const withChildren = useChildrenProvider();
    yield withChildren({type:Input,props:{inputRef:inputRef,...props}});
    if (typeof mask === 'string' || Array.isArray(mask)) {
        mask = Object.assign({ mask }, defaultMask);
    }
    else {
        mask = Object.assign(Object.assign({}, defaultMask), mask);
    }
    if (inputRef.value) {
        const maskInstance = Mask(mask).mask(inputRef.value);
        onDestroy(() => maskInstance.remove());
    }
}

export { InputMask };
