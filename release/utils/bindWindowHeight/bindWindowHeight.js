'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');
require('../core/index.js');
var windowHeight = require('../core/window/windowHeight.js');

function bindWindowHeight() {
    return new watchState.Watch(() => {
        document.body.style.setProperty('--window-height', `${windowHeight.windowHeight.value}px`);
    });
}

exports.bindWindowHeight = bindWindowHeight;
