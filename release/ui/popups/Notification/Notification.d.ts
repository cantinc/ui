import { HTMLStyleProps, LoopItem } from '@innet/dom';
import { NotificationOptions } from '../Notifications/types';
export interface NotificationProps extends HTMLStyleProps<HTMLDivElement> {
    notification: LoopItem<NotificationOptions>;
    onclose: () => void;
}
export declare function Notification({ notification, onclose, }: NotificationProps): any;
