'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function bindScrollPosition() {
    const listener = () => {
        requestAnimationFrame(() => {
            document.body.style.setProperty('--scroll', `${document.documentElement.scrollTop}px`);
        });
    };
    document.addEventListener('scroll', listener);
    listener();
    return () => document.removeEventListener('scroll', listener);
}

exports.bindScrollPosition = bindScrollPosition;
