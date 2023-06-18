'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');
var constants = require('./constants.js');

const notify = watchState.createEvent((content, type, timeout) => {
    constants.notifications.value.push({
        type,
        content,
        timeout: timeout !== null && timeout !== void 0 ? timeout : content.length / 10 + 1,
        key: `${Date.now()}${Math.random()}`,
    });
    constants.notifications.update();
});

exports.notify = notify;
