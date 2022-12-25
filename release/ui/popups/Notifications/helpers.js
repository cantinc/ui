'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');
var constants = require('./constants.js');

function notify(content, type, timeout) {
    watchState.globalEvent.start();
    constants.notifications.value.push({
        type,
        content,
        timeout: timeout !== null && timeout !== void 0 ? timeout : content.length / 10 + 1,
        key: `${Date.now()}${Math.random()}`,
    });
    constants.notifications.update();
    watchState.globalEvent.end();
}

exports.notify = notify;
