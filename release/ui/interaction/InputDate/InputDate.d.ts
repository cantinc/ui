import { type StateProp } from '@innet/dom';
import { type ActionProp } from '../../../utils';
import { type InputMaskProps } from '../InputMask';
export interface InputDateProps extends Omit<InputMaskProps, 'mask' | 'value' | 'oninput'> {
    apply?: any;
    value?: StateProp<Date | undefined>;
    min?: Date;
    max?: Date;
    goBackText?: any;
    todayText?: any;
    oninput?: ActionProp<Date | undefined>;
}
export declare function InputDate({ apply, value, oninput, min, max, goBackText, todayText, ...props }: InputDateProps): any;
