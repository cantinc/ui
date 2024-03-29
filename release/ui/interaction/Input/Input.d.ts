import { type HTMLProps, Ref, type StateProp } from '@innet/dom';
import { type IconProps } from '../../icons';
import { type FlexProps } from '../../layout';
export type InputType = 'text' | 'password' | 'date' | 'email' | 'tel' | 'number' | 'color';
export type RequiredType = 'star';
export interface InputProps extends Omit<FlexProps<HTMLLabelElement>, 'oninput' | 'autofocus'> {
    label?: StateProp<string>;
    value?: StateProp<string>;
    oninput?: (value: string) => void;
    placeholder?: StateProp<string>;
    error?: StateProp<boolean>;
    disabled?: StateProp<boolean>;
    required?: StateProp<boolean | RequiredType>;
    type?: StateProp<InputType>;
    name?: StateProp<string>;
    autofocus?: boolean | number;
    clearable?: boolean;
    debounce?: boolean | number;
    inputRef?: Ref<HTMLInputElement>;
    renderInput?: (props: HTMLProps<HTMLInputElement>) => any;
    props?: {
        input?: HTMLProps<HTMLInputElement>;
        before?: HTMLProps<HTMLSpanElement>;
        after?: HTMLProps<HTMLSpanElement>;
        border?: HTMLProps<HTMLSpanElement>;
        label?: HTMLProps<HTMLSpanElement>;
        hint?: HTMLProps<HTMLSpanElement>;
        clear?: Partial<IconProps>;
    };
}
export declare const defaultRenderInput: (props: HTMLProps<HTMLInputElement>) => any;
export declare function Input({ label, value, oninput, props, placeholder, autofocus, renderInput, error, disabled, required, inputRef, name, type, clearable, debounce, ...rest }?: InputProps): any;
