import { Ref } from '@innet/dom';
import { InputProps } from '../Input';
export interface TextAreaProps extends Omit<InputProps, 'renderInput' | 'inputRef'> {
    resize?: boolean | 'auto' | 'none' | 'both' | 'horizontal' | 'vertical' | 'inherit';
    rows?: number;
    inputRef?: Ref<HTMLTextAreaElement>;
}
export declare function TextArea({ resize, rows, style, inputRef, ...props }?: TextAreaProps): import("@innet/jsx").JSXElement<any, import("@innet/jsx").Props, import("@innet/jsx").Children>;
