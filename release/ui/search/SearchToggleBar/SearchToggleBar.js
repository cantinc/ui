'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var historyApi = require('@watch-state/history-api');
require('../../interaction/index.js');
var ToggleBar = require('../../interaction/ToggleBar/ToggleBar.js');

function SearchToggleBar(_a) {
    var { key } = _a, props = tslib.__rest(_a, ["key"]);
    function defaultSearchToggleBarRender({ value, label }, { className, onfocus, onblur }) {
        return ({type:'a',props:{onfocus:onfocus,onblur:onblur,onmouseenter:onfocus,onmousedown:(e) => {
                e.preventDefault();
            },class:className,scrollTo:-1,href:value ? `?${key}=${value}` : '?'},children:[label !== null && label !== void 0 ? label : value]});
    }
    return ({type:ToggleBar.ToggleBar,props:{...props,value:historyApi.getSearchParam(key),element:'nav',renderValue:defaultSearchToggleBarRender}});
}

exports.SearchToggleBar = SearchToggleBar;
