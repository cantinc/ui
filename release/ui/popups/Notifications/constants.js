'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');

const notifications = new watchState.State([]);
const notificationsEmpty = new watchState.Cache(() => !notifications.value.length);
const first3notifications = new watchState.Cache(() => {
    const values = notifications.value;
    return values.slice(0, 3);
});

exports.first3notifications = first3notifications;
exports.notifications = notifications;
exports.notificationsEmpty = notificationsEmpty;
