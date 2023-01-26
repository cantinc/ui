'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getDaysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

exports.getDaysInMonth = getDaysInMonth;
