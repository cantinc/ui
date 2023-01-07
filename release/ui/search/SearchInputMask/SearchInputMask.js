'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
require('../../interaction/index.js');
var InputMask = require('../../interaction/InputMask/InputMask.js');

function SearchInputMask(_a) {
    var { key, oninput } = _a, props = tslib.__rest(_a, ["key", "oninput"]);
    const handleChange = (val) => {
        const search = dom.stringifySearch(Object.assign(Object.assign({}, dom.parsedSearch.value), { [key]: val || undefined }), { addQueryPrefix: true });
        dom.history.push(`${dom.history.path}${search}`);
        oninput === null || oninput === void 0 ? void 0 : oninput(val);
    };
    return ({type:InputMask.InputMask,props:{...props,value:() => String(dom.parsedSearch.value[key] || ''),oninput:handleChange}});
}

exports.SearchInputMask = SearchInputMask;
