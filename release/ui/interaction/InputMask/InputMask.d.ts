import Mask from 'inputmask';
import { type InputProps } from '../Input';
export interface InputMaskProps extends InputProps {
    mask: Mask.Options | string | string[];
}
export declare function InputMask({ mask, inputRef, ...props }: InputMaskProps): Generator<import("@innet/jsx").JSXElement<any, import("@innet/jsx").Props, import("@innet/jsx").Children>, void, unknown>;
