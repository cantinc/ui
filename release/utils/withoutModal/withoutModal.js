'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dom = require('@innet/dom');

const options = {
    indices: false,
};
function withoutModal(modal, rest) {
    const search = dom.parsedSearch.value;
    const oldModal = search.modal;
    if (Array.isArray(oldModal)) {
        return dom.stringifySearch(Object.assign(Object.assign(Object.assign({}, search), rest), { 
            // @ts-expect-error TODO
            modal: oldModal.filter((val) => val !== modal) }), options);
    }
    return dom.stringifySearch(Object.assign(Object.assign(Object.assign({}, search), rest), { modal: undefined }), options);
}

exports.withoutModal = withoutModal;
