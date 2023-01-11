import { InputProps } from '../../interaction';
export interface SearchInputProps extends Omit<InputProps, 'value'> {
    key: string;
}
export declare function SearchInput({ key, oninput, ...props }: SearchInputProps): import("@innet/jsx").JSXElement<any, import("@innet/jsx").Props, import("@innet/jsx").Children>;
