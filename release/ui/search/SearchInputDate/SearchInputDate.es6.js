import { __rest } from 'tslib';
import { stringifySearch, parsedSearch, history } from '@innet/dom';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import '../../interaction/index.es6.js';
import { useChildrenProvider } from '../../../hooks/useChildrenProvider/useChildrenProvider.es6.js';
import { inputDateFormat } from '../../../utils/date/inputDateFormat/inputDateFormat.es6.js';
import { InputDate } from '../../interaction/InputDate/InputDate.es6.js';

function SearchInputDate(_a) {
    var { key, oninput } = _a, props = __rest(_a, ["key", "oninput"]);
    const provider = useChildrenProvider();
    const handleChange = (date) => {
        const search = stringifySearch(Object.assign(Object.assign({}, parsedSearch.value), { [key]: date && inputDateFormat(date) }), { addQueryPrefix: true });
        history.push(`${history.path}${search}`, -1);
        oninput === null || oninput === void 0 ? void 0 : oninput(date);
    };
    return provider({type:InputDate,props:{...props,value:() => parsedSearch.value[key] ? new Date(String(parsedSearch.value[key])) : undefined,oninput:handleChange}});
}

export { SearchInputDate };
