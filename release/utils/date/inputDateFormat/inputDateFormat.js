'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const inputDateFormat = (date, time) => {
    const offset = (new Date()).getTimezoneOffset() * 60000;
    return (new Date(date.getTime() - offset)).toISOString().slice(0, time ? 16 : 10);
};

exports.inputDateFormat = inputDateFormat;
