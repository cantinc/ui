'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');
var height = require('../core/window/height.js');

function bindWindowHeight() {
    return new watchState.Watch(() => {
        document.body.style.setProperty('--window-height', `${height.windowHeight.value}px`);
    });
}

exports.bindWindowHeight = bindWindowHeight;
