import { type StateProp } from '@innet/dom';
import { Context } from '@innet/jsx';
import { type ActionProp } from '../../../utils';
import { type InputMaskProps } from '../InputMask';
export declare const inputDateApply: Context<any, string>;
export interface InputDateProps extends Omit<InputMaskProps, 'mask' | 'value' | 'oninput'> {
    apply?: any;
    value?: StateProp<Date | undefined>;
    min?: Date;
    max?: Date;
    oninput?: ActionProp<Date | undefined>;
}
export declare function InputDate({ apply, value, oninput, min, max, ...props }: InputDateProps): any;
