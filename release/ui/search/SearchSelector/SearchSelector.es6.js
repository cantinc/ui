import { __rest } from 'tslib';
import { stringifySearch, parsedSearch } from '@innet/dom';
import { historyPush, locationPath, getSearchParam } from '@watch-state/history-api';
import '../../interaction/index.es6.js';
import { Selector } from '../../interaction/Selector/Selector.es6.js';

function SearchSelector(_a) {
    var { key, oninput } = _a, props = __rest(_a, ["key", "oninput"]);
    const handleChange = (val) => {
        const search = stringifySearch(Object.assign(Object.assign({}, parsedSearch.value), { [key]: val || undefined }), { addQueryPrefix: true });
        historyPush(`${locationPath.value}${search}`, -1);
        oninput === null || oninput === void 0 ? void 0 : oninput(val);
    };
    return ({type:Selector,props:{...props,value:getSearchParam(key),oninput:handleChange}});
}

export { SearchSelector };
