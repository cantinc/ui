import { __rest } from 'tslib';
import { stringifySearch, parsedSearch, history } from '@innet/dom';
import '../../../hooks/index.es6.js';
import '../../interaction/index.es6.js';
import { useChildrenProvider } from '../../../hooks/useChildrenProvider/useChildrenProvider.es6.js';
import { InputNumber } from '../../interaction/InputNumber/InputNumber.es6.js';

function SearchInputNumber(_a) {
    var { key, oninput } = _a, props = __rest(_a, ["key", "oninput"]);
    const withChildren = useChildrenProvider();
    const handleChange = (val) => {
        const search = stringifySearch(Object.assign(Object.assign({}, parsedSearch.value), { [key]: val ? String(val) : undefined }), { addQueryPrefix: true });
        history.push(`${history.path}${search}`, -1);
        oninput === null || oninput === void 0 ? void 0 : oninput(Number(val));
    };
    return withChildren({type:InputNumber,props:{...props,value:() => Number(parsedSearch.value[key] || 0),oninput:handleChange}});
}

export { SearchInputNumber };
