export interface AsyncProps<T extends object> {
    import: () => Promise<T>;
    name?: keyof T;
    props?: any;
    children?: any;
    showDelay?: number;
}
export interface LocalesProp {
    locales: any[];
}
export declare function Async<T extends object>({ import: request, name, props, children, showDelay, }: AsyncProps<T>): AsyncGenerator<any, void, unknown>;
