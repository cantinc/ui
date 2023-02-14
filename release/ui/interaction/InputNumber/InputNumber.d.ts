import { type StateProp } from '@innet/dom';
import { type InputProps } from '../Input';
export interface InputNumberProps extends Omit<InputProps, 'value' | 'oninput'> {
    value?: StateProp<number>;
    step?: StateProp<number>;
    oninput?: (value: number) => void;
    min?: StateProp<number>;
    max?: StateProp<number>;
}
export declare function InputNumber({ value, step, oninput, min, max, inputRef, onkeydown, ...props }?: InputNumberProps): any;
