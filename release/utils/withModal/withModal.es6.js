import { parsedSearch, stringifySearch } from '@innet/dom';

const options = {
    indices: false,
};
function withModal(modal, rest) {
    const search = parsedSearch.value;
    const oldModal = search.modal;
    if (!oldModal) {
        return stringifySearch(Object.assign(Object.assign(Object.assign({}, search), rest), { modal }), options);
    }
    if (Array.isArray(oldModal)) {
        return stringifySearch(Object.assign(Object.assign(Object.assign({}, search), rest), { modal: [...oldModal, modal] }), options);
    }
    return stringifySearch(Object.assign(Object.assign(Object.assign({}, search), rest), { modal: [oldModal, modal] }), options);
}

export { withModal };
