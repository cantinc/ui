import { __rest } from 'tslib';
import { stringifySearch, parsedSearch } from '@innet/dom';
import { historyPush, locationPath } from '@watch-state/history-api';

function removeModal(search) {
    if (!('modal' in search))
        return;
    const { modal } = search, rest = __rest(search, ["modal"]);
    if (!Array.isArray(modal)) {
        const result = stringifySearch(rest);
        historyPush(result ? `?${result}` : locationPath.value, -1);
        return;
    }
    const newModal = modal.slice(0, -1);
    const result = stringifySearch(Object.assign(Object.assign({}, rest), { modal: newModal.length > 1 ? newModal : newModal[0] }));
    historyPush(result ? `?${result}` : locationPath.value, -1);
}
function closeRouterModal() {
    removeModal(parsedSearch.value);
}
function getCloseRouterModal(rest) {
    if (!rest) {
        return closeRouterModal;
    }
    return () => {
        const search = Object.assign({}, parsedSearch.value);
        for (let i = 0; i < rest.length; i++) {
            delete search[rest[i]];
        }
        removeModal(search);
    };
}

export { closeRouterModal, getCloseRouterModal };
