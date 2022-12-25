import '../useListener/index.es6.js';
import { useListener } from '../useListener/useListener.es6.js';

function useEscapeListener(listener) {
    useListener('keyup', e => {
        if (e.key === 'Escape') {
            listener();
        }
    }, document.body);
}

export { useEscapeListener };
