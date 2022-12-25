import '../useListener/index.es6.js';
import { useListener } from '../useListener/useListener.es6.js';

function useResizeListener(listener) {
    useListener('resize', listener);
}

export { useResizeListener };
