import { Watch } from 'watch-state';
import '../../store/index.es6.js';
import { scrollPosition } from '../../store/window/window.es6.js';

function bindScrollPosition() {
    const watcher = new Watch(() => {
        document.body.style.setProperty('--scroll', `${scrollPosition.value}px`);
    });
    return () => watcher.destroy();
}

export { bindScrollPosition };
