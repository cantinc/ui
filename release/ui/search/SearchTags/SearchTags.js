'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
require('../../interaction/index.js');
var Tags = require('../../interaction/Tags/Tags.js');

function SearchTags(_a) {
    var { key, onchange } = _a, props = tslib.__rest(_a, ["key", "onchange"]);
    const handleChange = (val) => {
        const search = dom.stringifySearch(Object.assign(Object.assign({}, dom.parsedSearch.value), { [key]: val || undefined }), { addQueryPrefix: true });
        dom.history.push(`${dom.history.path}${search}`, -1);
        onchange === null || onchange === void 0 ? void 0 : onchange(val);
    };
    return ({type:Tags.Tags,props:{...props,value:() => dom.parsedSearch.value[key] || '',onchange:handleChange}});
}

exports.SearchTags = SearchTags;
