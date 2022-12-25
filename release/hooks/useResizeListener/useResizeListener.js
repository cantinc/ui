'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../useListener/index.js');
var useListener = require('../useListener/useListener.js');

function useResizeListener(listener) {
    useListener.useListener('resize', listener);
}

exports.useResizeListener = useResizeListener;
