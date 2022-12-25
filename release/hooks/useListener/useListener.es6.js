import { onDestroy } from 'watch-state';

function useListener(type, listener, target = window) {
    target.addEventListener(type, listener);
    onDestroy(() => target.removeEventListener(type, listener));
}

export { useListener };
