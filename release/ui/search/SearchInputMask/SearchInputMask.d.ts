import { type InputMaskProps } from '../../interaction';
export interface SearchInputMaskProps extends Omit<InputMaskProps, 'value'> {
    key: string;
}
export declare function SearchInputMask({ key, oninput, ...props }: SearchInputMaskProps): import("@innet/jsx").JSXElement<any, import("@innet/jsx").Props, import("@innet/jsx").Children>;
