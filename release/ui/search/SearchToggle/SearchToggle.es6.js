import { __rest } from 'tslib';
import { history, use, stringifySearch, parsedSearch } from '@innet/dom';
import { Cache } from 'watch-state';
import '../../interaction/index.es6.js';
import { Toggle } from '../../interaction/Toggle/Toggle.es6.js';

function SearchToggle(_a) {
    var { key, value = 'true', onchange } = _a, props = __rest(_a, ["key", "value", "onchange"]);
    const state = new Cache(() => history.getSearch(key) === use(value));
    const handleChange = (val) => {
        const search = stringifySearch(Object.assign(Object.assign({}, parsedSearch.value), { [key]: val ? use(value) : undefined }), { addQueryPrefix: true });
        history.push(`${history.path}${search}`);
        onchange === null || onchange === void 0 ? void 0 : onchange(val);
    };
    return ({type:Toggle,props:{...props,onchange:handleChange,checked:state}});
}

export { SearchToggle };
