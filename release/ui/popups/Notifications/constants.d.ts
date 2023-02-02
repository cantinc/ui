import { Cache, State } from 'watch-state';
import { type NotificationOptions } from './types';
export declare const notifications: State<NotificationOptions[]>;
export declare const notificationsEmpty: Cache<boolean>;
export declare const first3notifications: Cache<NotificationOptions[]>;
