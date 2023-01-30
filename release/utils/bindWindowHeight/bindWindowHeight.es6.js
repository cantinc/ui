import { Watch } from 'watch-state';
import '../core/index.es6.js';
import { windowHeight } from '../core/window/windowHeight.es6.js';

function bindWindowHeight() {
    return new Watch(() => {
        document.body.style.setProperty('--window-height', `${windowHeight.value}px`);
    });
}

export { bindWindowHeight };
