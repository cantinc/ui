'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getWeek(week, format = 'long') {
    return new Date(0, 0, week)
        .toLocaleString('default', { weekday: format });
}

exports.getWeek = getWeek;
