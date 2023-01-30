'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
require('../../../hooks/index.js');
require('../../interaction/index.js');
var useChildrenProvider = require('../../../hooks/useChildrenProvider/useChildrenProvider.js');
var InputNumber = require('../../interaction/InputNumber/InputNumber.js');

function SearchInputNumber(_a) {
    var { key, oninput } = _a, props = tslib.__rest(_a, ["key", "oninput"]);
    const withChildren = useChildrenProvider.useChildrenProvider();
    const handleChange = (val) => {
        const search = dom.stringifySearch(Object.assign(Object.assign({}, dom.parsedSearch.value), { [key]: val ? String(val) : undefined }), { addQueryPrefix: true });
        dom.history.push(`${dom.history.path}${search}`, -1);
        oninput === null || oninput === void 0 ? void 0 : oninput(Number(val));
    };
    return withChildren({type:InputNumber.InputNumber,props:{...props,value:() => Number(dom.parsedSearch.value[key] || 0),oninput:handleChange}});
}

exports.SearchInputNumber = SearchInputNumber;
