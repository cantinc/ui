'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function dateMinMax(date, min, max) {
    if (min && date < min)
        return min;
    if (max && date > max)
        return max;
    return date;
}

exports.dateMinMax = dateMinMax;
