import { type InputNumberProps } from '../../interaction';
export interface SearchInputNumberProps extends Omit<InputNumberProps, 'value'> {
    key: string;
}
export declare function SearchInputNumber({ key, oninput, ...props }: SearchInputNumberProps): import("@innet/jsx").JSXElement<any, import("@innet/jsx").Props, import("@innet/jsx").Children>;
