'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
require('../../interaction/index.js');
var Tags = require('../../interaction/Tags/Tags.js');

function SearchTags(_a) {
    var { key, onchange, multiple } = _a, props = tslib.__rest(_a, ["key", "onchange", "multiple"]);
    const handleChange = (val) => {
        console.log(val);
        const search = dom.stringifySearch(Object.assign(Object.assign({}, dom.parsedSearch.value), { [key]: Array.isArray(val) && val.length === 1 ? val[0] : val || undefined }), { addQueryPrefix: true });
        dom.history.push(`${dom.history.path}${search}`, -1);
        onchange === null || onchange === void 0 ? void 0 : onchange(val);
    };
    const value = () => {
        const val = dom.parsedSearch.value[key] || '';
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
    return ({type:Tags.Tags,props:{...props,multiple:multiple,value:value,onchange:handleChange}});
}

exports.SearchTags = SearchTags;
