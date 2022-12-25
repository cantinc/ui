import { globalEvent } from 'watch-state';
import { notifications } from './constants.es6.js';

function notify(content, type, timeout) {
    globalEvent.start();
    notifications.value.push({
        type,
        content,
        timeout: timeout !== null && timeout !== void 0 ? timeout : content.length / 10 + 1,
        key: `${Date.now()}${Math.random()}`,
    });
    notifications.update();
    globalEvent.end();
}

export { notify };
