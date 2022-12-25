import '../../../hooks/index.es6.js';
import { useListener } from '../../../hooks/useListener/useListener.es6.js';

function Listener({ type, listener, target, }) {
    useListener(type, listener, target);
}

export { Listener };
