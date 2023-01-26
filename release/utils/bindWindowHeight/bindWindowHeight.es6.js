import { Watch } from 'watch-state';
import { windowHeight } from '../core/window/height.es6.js';

function bindWindowHeight() {
    return new Watch(() => {
        document.body.style.setProperty('--window-height', `${windowHeight.value}px`);
    });
}

export { bindWindowHeight };
