export interface AsyncProps<T extends object> {
    import: () => Promise<T>;
    name?: keyof T;
    props?: any;
    asyncProps?: () => Promise<any>;
    children?: any;
    showDelay?: number;
}
export declare function Async<T extends object>({ import: request, name, props, asyncProps, children, showDelay, }: AsyncProps<T>): AsyncGenerator<any, void, unknown>;
