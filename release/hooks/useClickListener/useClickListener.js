'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');

function useClickListener(listener) {
    const timer = setTimeout(() => document.documentElement.addEventListener('click', listener));
    watchState.onDestroy(() => {
        clearTimeout(timer);
        document.documentElement.removeEventListener('click', listener);
    });
}

exports.useClickListener = useClickListener;
