import { __rest } from 'tslib';
import { stringifySearch, parsedSearch, history } from '@innet/dom';
import '../../../hooks/index.es6.js';
import '../../interaction/index.es6.js';
import { useChildrenProvider } from '../../../hooks/useChildrenProvider/useChildrenProvider.es6.js';
import { InputMask } from '../../interaction/InputMask/InputMask.es6.js';

function SearchInputMask(_a) {
    var { key, oninput } = _a, props = __rest(_a, ["key", "oninput"]);
    const withChildren = useChildrenProvider();
    const handleChange = (val) => {
        const search = stringifySearch(Object.assign(Object.assign({}, parsedSearch.value), { [key]: val || undefined }), { addQueryPrefix: true });
        history.push(`${history.path}${search}`);
        oninput === null || oninput === void 0 ? void 0 : oninput(val);
    };
    return withChildren({type:InputMask,props:{...props,value:() => String(parsedSearch.value[key] || ''),oninput:handleChange}});
}

export { SearchInputMask };
