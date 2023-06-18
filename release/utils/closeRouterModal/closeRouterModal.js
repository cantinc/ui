'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var dom = require('@innet/dom');
var historyApi = require('@watch-state/history-api');

function removeModal(search) {
    if (!('modal' in search))
        return;
    const { modal } = search, rest = tslib.__rest(search, ["modal"]);
    if (!Array.isArray(modal)) {
        const result = dom.stringifySearch(rest);
        historyApi.historyPush(result ? `?${result}` : historyApi.locationPath.value, -1);
        return;
    }
    const newModal = modal.slice(0, -1);
    const result = dom.stringifySearch(Object.assign(Object.assign({}, rest), { modal: newModal.length > 1 ? newModal : newModal[0] }));
    historyApi.historyPush(result ? `?${result}` : historyApi.locationPath.value, -1);
}
function closeRouterModal() {
    removeModal(dom.parsedSearch.value);
}
function getCloseRouterModal(rest) {
    if (!rest) {
        return closeRouterModal;
    }
    return () => {
        const search = Object.assign({}, dom.parsedSearch.value);
        for (let i = 0; i < rest.length; i++) {
            delete search[rest[i]];
        }
        removeModal(search);
    };
}

exports.closeRouterModal = closeRouterModal;
exports.getCloseRouterModal = getCloseRouterModal;
