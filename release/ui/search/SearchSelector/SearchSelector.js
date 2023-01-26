'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
require('../../interaction/index.js');
var Selector = require('../../interaction/Selector/Selector.js');

function SearchSelector(_a) {
    var { key, oninput } = _a, props = tslib.__rest(_a, ["key", "oninput"]);
    const handleChange = (val) => {
        const search = dom.stringifySearch(Object.assign(Object.assign({}, dom.parsedSearch.value), { [key]: val || undefined }), { addQueryPrefix: true });
        dom.history.push(`${dom.history.path}${search}`, -1);
        oninput === null || oninput === void 0 ? void 0 : oninput(val);
    };
    return ({type:Selector.Selector,props:{...props,value:() => dom.history.getSearch(key),oninput:handleChange}});
}

exports.SearchSelector = SearchSelector;
