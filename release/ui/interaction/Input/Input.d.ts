import { HTMLProps, Ref, StateProp } from '@innet/dom';
import { IconProps } from '../../icons';
import { FlexProps } from '../../layout';
export declare type InputType = 'text' | 'password';
export interface InputProps extends Omit<FlexProps<HTMLLabelElement>, 'oninput'> {
    label?: StateProp<string>;
    value?: StateProp<string>;
    oninput?: (value: string) => void;
    placeholder?: StateProp<string>;
    error?: StateProp<boolean>;
    disabled?: StateProp<boolean>;
    required?: StateProp<boolean>;
    type?: StateProp<InputType>;
    name?: StateProp<string>;
    clearable?: boolean;
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
export declare function Input({ label, value, oninput, props, placeholder, renderInput, error, disabled, required, inputRef, name, type, clearable, ...rest }?: InputProps): any;
