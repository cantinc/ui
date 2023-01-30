'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');

const windowWidth = new watchState.State(window.innerWidth);
window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
});

exports.windowWidth = windowWidth;
