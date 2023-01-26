import { __rest } from 'tslib';
import { stringifySearch, parsedSearch, history } from '@innet/dom';
import '../../interaction/index.es6.js';
import { Selector } from '../../interaction/Selector/Selector.es6.js';

function SearchSelector(_a) {
    var { key, oninput } = _a, props = __rest(_a, ["key", "oninput"]);
    const handleChange = (val) => {
        const search = stringifySearch(Object.assign(Object.assign({}, parsedSearch.value), { [key]: val || undefined }), { addQueryPrefix: true });
        history.push(`${history.path}${search}`, -1);
        oninput === null || oninput === void 0 ? void 0 : oninput(val);
    };
    return ({type:Selector,props:{...props,value:() => history.getSearch(key),oninput:handleChange}});
}

export { SearchSelector };
