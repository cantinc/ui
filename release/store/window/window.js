'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');

const scrollPosition = new watchState.State(window.scrollY);
const scrollPositionListener = () => {
    scrollPosition.value = window.scrollY;
};
window.addEventListener('scroll', scrollPositionListener, { capture: false, passive: true });

exports.scrollPosition = scrollPosition;
exports.scrollPositionListener = scrollPositionListener;
