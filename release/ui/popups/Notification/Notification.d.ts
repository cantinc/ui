import { type HTMLStyleProps } from '@innet/dom';
export interface NotificationProps extends HTMLStyleProps<HTMLDivElement> {
    onclose: () => void;
}
export declare function Notification({ onclose, }: NotificationProps): any;
