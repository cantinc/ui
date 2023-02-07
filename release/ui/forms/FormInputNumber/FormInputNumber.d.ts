import { type InputNumberProps } from '../../interaction';
import { type FormFieldProps } from '../Form/types';
export interface FormInputNumberProps extends Omit<InputNumberProps, keyof FormFieldProps<number>>, FormFieldProps<number> {
}
export declare function FormInputNumber({ inputRef, onchange, disabled, validation, ...props }: FormInputNumberProps): any;
