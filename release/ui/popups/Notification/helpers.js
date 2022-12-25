'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class Timer {
    constructor(callback, delay = 0, autoplay) {
        this.callback = callback;
        this.delay = delay;
        this.destroyed = false;
        if (autoplay) {
            this.play();
        }
    }
    play() {
        if (!this.destroyed && !this.start) {
            clearTimeout(this.timer);
            this.start = Date.now();
            this.timer = setTimeout(this.callback, this.delay);
        }
    }
    pause() {
        if (!this.destroyed && this.start) {
            clearTimeout(this.timer);
            this.timer = undefined;
            this.delay -= Date.now() - this.start;
            this.start = undefined;
        }
    }
    destroy() {
        clearTimeout(this.timer);
        this.destroyed = true;
    }
}

exports.Timer = Timer;
