import { __rest } from 'tslib';
import { stringifySearch, parsedSearch, history } from '@innet/dom';
import '../../../hooks/index.es6.js';
import '../../interaction/index.es6.js';
import { useChildrenProvider } from '../../../hooks/useChildrenProvider/useChildrenProvider.es6.js';
import { Input } from '../../interaction/Input/Input.es6.js';

function SearchInput(_a) {
    var { key, oninput } = _a, props = __rest(_a, ["key", "oninput"]);
    const provider = useChildrenProvider();
    const handleChange = (val) => {
        const search = stringifySearch(Object.assign(Object.assign({}, parsedSearch.value), { [key]: val || undefined }), { addQueryPrefix: true });
        history.push(`${history.path}${search}`, -1);
        oninput === null || oninput === void 0 ? void 0 : oninput(val);
    };
    return provider({type:Input,props:{...props,value:() => String(parsedSearch.value[key] || ''),oninput:handleChange}});
}

export { SearchInput };
