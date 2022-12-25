'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');

const notifications = new watchState.State([]);
const notificationsEmpty = new watchState.Cache(() => !notifications.value.length);

exports.notifications = notifications;
exports.notificationsEmpty = notificationsEmpty;
