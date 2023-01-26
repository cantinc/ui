'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getMonth(month, format = 'long') {
    return new Date(`2023-${`${month + 1}`.padStart(2, '0')}-01`)
        .toLocaleString('default', { month: format });
}

exports.getMonth = getMonth;
