import { State, Cache } from 'watch-state';

const notifications = new State([]);
const notificationsEmpty = new Cache(() => !notifications.value.length);
const first3notifications = new Cache(() => {
    const values = notifications.value;
    return values.slice(0, 3);
});

export { first3notifications, notifications, notificationsEmpty };
