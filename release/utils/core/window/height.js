'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');

const windowHeight = new watchState.State(window.innerHeight);
window.addEventListener('resize', () => {
    windowHeight.value = window.innerHeight;
});

exports.windowHeight = windowHeight;
