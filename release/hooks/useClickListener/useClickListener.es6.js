import { onDestroy } from 'watch-state';

function useClickListener(listener) {
    const timer = setTimeout(() => document.documentElement.addEventListener('click', listener));
    onDestroy(() => {
        clearTimeout(timer);
        document.documentElement.removeEventListener('click', listener);
    });
}

export { useClickListener };
