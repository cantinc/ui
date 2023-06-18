import { createEvent } from 'watch-state';
import { notifications } from './constants.es6.js';

const notify = createEvent((content, type, timeout) => {
    notifications.value.push({
        type,
        content,
        timeout: timeout !== null && timeout !== void 0 ? timeout : content.length / 10 + 1,
        key: `${Date.now()}${Math.random()}`,
    });
    notifications.update();
});

export { notify };
