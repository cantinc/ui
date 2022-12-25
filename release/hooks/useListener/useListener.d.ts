export declare function useListener<K extends keyof HTMLElementEventMap>(type: K, listener: (e: HTMLElementEventMap[K]) => any, target?: Window | HTMLElement): void;
