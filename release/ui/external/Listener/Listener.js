'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../hooks/index.js');
var useListener = require('../../../hooks/useListener/useListener.js');

function Listener({ type, listener, target, }) {
    useListener.useListener(type, listener, target);
}

exports.Listener = Listener;
