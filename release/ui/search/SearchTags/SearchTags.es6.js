import { __rest } from 'tslib';
import { stringifySearch, parsedSearch } from '@innet/dom';
import { historyPush, locationPath } from '@watch-state/history-api';
import '../../interaction/index.es6.js';
import { Tags } from '../../interaction/Tags/Tags.es6.js';

function SearchTags(_a) {
    var { key, onchange, multiple } = _a, props = __rest(_a, ["key", "onchange", "multiple"]);
    const handleChange = (val) => {
        const search = stringifySearch(Object.assign(Object.assign({}, parsedSearch.value), { [key]: Array.isArray(val) && val.length === 1 ? val[0] : val || undefined }), { addQueryPrefix: true });
        historyPush(`${locationPath.value}${search}`, -1);
        onchange === null || onchange === void 0 ? void 0 : onchange(val);
    };
    const value = () => {
        const val = parsedSearch.value[key] || '';
        if (!Array.isArray(val) && typeof val === 'object') {
            return '';
        }
        if (multiple) {
            if (Array.isArray(val)) {
                return val;
            }
            return val ? [val] : [];
        }
        if (Array.isArray(val)) {
            return val[0];
        }
        return val;
    };
    return ({type:Tags,props:{...props,multiple:multiple,value:value,onchange:handleChange}});
}

export { SearchTags };
