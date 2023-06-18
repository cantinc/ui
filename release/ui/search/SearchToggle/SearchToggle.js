'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var historyApi = require('@watch-state/history-api');
var watchState = require('watch-state');
require('../../interaction/index.js');
var Toggle = require('../../interaction/Toggle/Toggle.js');

function SearchToggle(_a) {
    var { key, value = 'true', onchange } = _a, props = tslib.__rest(_a, ["key", "value", "onchange"]);
    const state = new watchState.Cache(() => dom.parsedSearch.value[key] === dom.use(value));
    const handleChange = (val) => {
        const search = dom.stringifySearch(Object.assign(Object.assign({}, dom.parsedSearch.value), { [key]: val ? dom.use(value) : undefined }), { addQueryPrefix: true });
        historyApi.historyPush(`${historyApi.locationPath.value}${search}`, -1);
        onchange === null || onchange === void 0 ? void 0 : onchange(val);
    };
    return ({type:Toggle.Toggle,props:{...props,onchange:handleChange,checked:state}});
}

exports.SearchToggle = SearchToggle;
