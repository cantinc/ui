'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');
require('../../store/index.js');
var window = require('../../store/window/window.js');

function bindScrollPosition() {
    const watcher = new watchState.Watch(() => {
        document.body.style.setProperty('--scroll', `${window.scrollPosition.value}px`);
    });
    return () => watcher.destroy();
}

exports.bindScrollPosition = bindScrollPosition;
