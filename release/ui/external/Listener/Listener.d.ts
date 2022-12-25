export interface ListenerProps<K extends keyof HTMLElementEventMap> {
    type: K;
    listener: (e: HTMLElementEventMap[K]) => any;
    target?: Window | HTMLElement;
}
export declare function Listener<K extends keyof HTMLElementEventMap>({ type, listener, target, }: ListenerProps<K>): void;
