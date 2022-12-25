'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../useListener/index.js');
var useListener = require('../useListener/useListener.js');

function useEscapeListener(listener) {
    useListener.useListener('keyup', e => {
        if (e.key === 'Escape') {
            listener();
        }
    }, document.body);
}

exports.useEscapeListener = useEscapeListener;
