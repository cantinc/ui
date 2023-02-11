import { __rest } from 'tslib';
import { stringifySearch, parsedSearch, history } from '@innet/dom';
import '../../interaction/index.es6.js';
import { Tags } from '../../interaction/Tags/Tags.es6.js';

function SearchTags(_a) {
    var { key, onchange } = _a, props = __rest(_a, ["key", "onchange"]);
    const handleChange = (val) => {
        const search = stringifySearch(Object.assign(Object.assign({}, parsedSearch.value), { [key]: val || undefined }), { addQueryPrefix: true });
        history.push(`${history.path}${search}`, -1);
        onchange === null || onchange === void 0 ? void 0 : onchange(val);
    };
    return ({type:Tags,props:{...props,value:() => parsedSearch.value[key] || '',onchange:handleChange}});
}

export { SearchTags };
