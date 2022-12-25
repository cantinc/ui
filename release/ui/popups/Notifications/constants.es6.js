import { State, Cache } from 'watch-state';

const notifications = new State([]);
const notificationsEmpty = new Cache(() => !notifications.value.length);

export { notifications, notificationsEmpty };
