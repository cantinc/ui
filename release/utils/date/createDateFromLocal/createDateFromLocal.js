'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var locale = require('../../../constants/locale.js');

const dIndex = locale.localeDateFormat.indexOf('d');
const mIndex = locale.localeDateFormat.indexOf('m');
const yIndex = locale.localeDateFormat.indexOf('y');
function createDateFromLocal(date) {
    const day = Number(date.slice(dIndex, dIndex + 2));
    const month = Number(date.slice(mIndex, mIndex + 2));
    const year = Number(date.slice(yIndex, yIndex + 4));
    return new Date(year, month - 1, day);
}

exports.createDateFromLocal = createDateFromLocal;
