import { InputNumberProps } from '../../interaction';
import { FormFieldProps } from '../Form/types';
export interface FormInputNumberProps extends Omit<InputNumberProps, keyof FormFieldProps<number>>, FormFieldProps {
}
export declare function FormInputNumber({ inputRef, onchange, disabled, validation, ...props }: FormInputNumberProps): any;
