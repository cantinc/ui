'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function bindScrollPosition() {
    const listener = () => {
        document.body.style.setProperty('--scroll', `${window.scrollY}px`);
    };
    window.addEventListener('scroll', listener, { capture: false, passive: true });
    listener();
    return () => window.removeEventListener('scroll', listener);
}

exports.bindScrollPosition = bindScrollPosition;
