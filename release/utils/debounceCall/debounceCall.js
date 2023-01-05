'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function debounceCall(target, debounce = 300) {
    let timer;
    return ((...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            target(...args);
        }, debounce);
    });
}

exports.debounceCall = debounceCall;
