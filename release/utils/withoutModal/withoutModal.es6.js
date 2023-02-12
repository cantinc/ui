import { parsedSearch, stringifySearch } from '@innet/dom';

const options = {
    indices: false,
};
function withoutModal(modal, rest) {
    const search = parsedSearch.value;
    const oldModal = search.modal;
    if (Array.isArray(oldModal)) {
        return stringifySearch(Object.assign(Object.assign(Object.assign({}, search), rest), { 
            // @ts-expect-error TODO
            modal: oldModal.filter((val) => val !== modal) }), options);
    }
    return stringifySearch(Object.assign(Object.assign(Object.assign({}, search), rest), { modal: undefined }), options);
}

export { withoutModal };
