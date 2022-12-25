'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');

const options = {
    indices: false,
};
function withModal(modal, rest) {
    const search = dom.parsedSearch.value;
    const oldModal = search.modal;
    if (!oldModal) {
        return dom.stringifySearch(Object.assign(Object.assign(Object.assign({}, search), rest), { modal }), options);
    }
    if (Array.isArray(oldModal)) {
        return dom.stringifySearch(Object.assign(Object.assign(Object.assign({}, search), rest), { modal: [...oldModal, modal] }), options);
    }
    return dom.stringifySearch(Object.assign(Object.assign(Object.assign({}, search), rest), { modal: [oldModal, modal] }), options);
}

exports.withModal = withModal;
