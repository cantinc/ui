'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');

function useListener(type, listener, target = window) {
    target.addEventListener(type, listener);
    watchState.onDestroy(() => target.removeEventListener(type, listener));
}

exports.useListener = useListener;
