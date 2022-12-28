import { __rest } from 'tslib';
import { stringifySearch, parsedSearch, history } from '@innet/dom';
import '../../interaction/index.es6.js';
import { Input } from '../../interaction/Input/Input.es6.js';

function SearchInput(_a) {
    var { key, oninput } = _a, props = __rest(_a, ["key", "oninput"]);
    const handleChange = (val) => {
        const search = stringifySearch(Object.assign(Object.assign({}, parsedSearch.value), { [key]: val || undefined }), { addQueryPrefix: true });
        history.push(`${history.path}${search}`);
        oninput === null || oninput === void 0 ? void 0 : oninput(val);
    };
    return ({type:Input,props:{...props,value:() => history.getSearch(key),oninput:handleChange}});
}

export { SearchInput };
