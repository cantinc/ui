'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var watchState = require('watch-state');

let count = 0;
let scroll = 0;
function usePopup() {
    if (!count) {
        scroll = window.scrollY;
        const { style } = document.body;
        style.setProperty('overflow', 'hidden');
        style.setProperty('position', 'fixed');
        style.setProperty('top', `-${scroll}px`);
        style.setProperty('width', '100%');
    }
    count++;
    watchState.onDestroy(() => {
        count--;
        if (!count) {
            const { style } = document.body;
            style.removeProperty('overflow');
            style.removeProperty('position');
            style.removeProperty('top');
            style.removeProperty('width');
            const eStyle = document.documentElement.style;
            eStyle.setProperty('scroll-behavior', 'unset');
            document.documentElement.scrollTo({
                top: scroll,
            });
            setTimeout(() => {
                eStyle.removeProperty('scroll-behavior');
            });
        }
    });
}

exports.usePopup = usePopup;
