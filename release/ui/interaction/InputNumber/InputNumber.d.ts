import { StateProp } from '@innet/dom';
import { InputProps } from '../Input';
export interface InputNumberProps extends Omit<InputProps, 'value' | 'oninput'> {
    value?: StateProp<number>;
    step?: StateProp<number>;
    oninput?: (value: number) => void;
}
export declare function InputNumber({ value, step, oninput, ...props }?: InputNumberProps): any;
