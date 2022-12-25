export declare class Timer {
    private readonly callback;
    delay: number;
    start?: number;
    timer?: number;
    destroyed: boolean;
    constructor(callback: () => any, delay?: number, autoplay?: boolean);
    play(): void;
    pause(): void;
    destroy(): void;
}
