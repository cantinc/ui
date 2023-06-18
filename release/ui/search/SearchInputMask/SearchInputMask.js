'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var historyApi = require('@watch-state/history-api');
require('../../../hooks/index.js');
require('../../interaction/index.js');
var useChildrenProvider = require('../../../hooks/useChildrenProvider/useChildrenProvider.js');
var InputMask = require('../../interaction/InputMask/InputMask.js');

function SearchInputMask(_a) {
    var { key, oninput } = _a, props = tslib.__rest(_a, ["key", "oninput"]);
    const withChildren = useChildrenProvider.useChildrenProvider();
    const handleChange = (val) => {
        const search = dom.stringifySearch(Object.assign(Object.assign({}, dom.parsedSearch.value), { [key]: val || undefined }), { addQueryPrefix: true });
        historyApi.historyPush(`${historyApi.locationPath.value}${search}`, -1);
        oninput === null || oninput === void 0 ? void 0 : oninput(val);
    };
    return withChildren({type:InputMask.InputMask,props:{...props,value:() => String(dom.parsedSearch.value[key] || ''),oninput:handleChange}});
}

exports.SearchInputMask = SearchInputMask;
