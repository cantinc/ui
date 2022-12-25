import { Style } from '@innet/dom';
export interface JSXStringifyProps extends Style {
    components?: Record<string, string>;
    functions?: Map<Function, string>;
}
export declare function JSXStringify({ components, functions }?: JSXStringifyProps): any;
