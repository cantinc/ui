'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
require('../../../hooks/index.js');
require('../../../utils/index.js');
require('../../interaction/index.js');
var useChildrenProvider = require('../../../hooks/useChildrenProvider/useChildrenProvider.js');
var inputDateFormat = require('../../../utils/date/inputDateFormat/inputDateFormat.js');
var InputDate = require('../../interaction/InputDate/InputDate.js');

function SearchInputDate(_a) {
    var { key, oninput } = _a, props = tslib.__rest(_a, ["key", "oninput"]);
    const provider = useChildrenProvider.useChildrenProvider();
    const handleChange = (date) => {
        const search = dom.stringifySearch(Object.assign(Object.assign({}, dom.parsedSearch.value), { [key]: date && inputDateFormat.inputDateFormat(date) }), { addQueryPrefix: true });
        dom.history.push(`${dom.history.path}${search}`, -1);
        oninput === null || oninput === void 0 ? void 0 : oninput(date);
    };
    return provider({type:InputDate.InputDate,props:{...props,value:() => dom.parsedSearch.value[key] ? new Date(String(dom.parsedSearch.value[key])) : undefined,oninput:handleChange}});
}

exports.SearchInputDate = SearchInputDate;
