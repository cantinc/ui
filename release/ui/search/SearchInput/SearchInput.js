'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
require('../../../hooks/index.js');
require('../../interaction/index.js');
var useChildrenProvider = require('../../../hooks/useChildrenProvider/useChildrenProvider.js');
var Input = require('../../interaction/Input/Input.js');

function SearchInput(_a) {
    var { key, oninput } = _a, props = tslib.__rest(_a, ["key", "oninput"]);
    const provider = useChildrenProvider.useChildrenProvider();
    const handleChange = (val) => {
        const search = dom.stringifySearch(Object.assign(Object.assign({}, dom.parsedSearch.value), { [key]: val || undefined }), { addQueryPrefix: true });
        dom.history.push(`${dom.history.path}${search}`);
        oninput === null || oninput === void 0 ? void 0 : oninput(val);
    };
    return provider({type:Input.Input,props:{...props,value:() => String(dom.parsedSearch.value[key] || ''),oninput:handleChange}});
}

exports.SearchInput = SearchInput;
