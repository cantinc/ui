import { type InputDateProps } from '../../interaction';
import { type FormFieldProps } from '../Form/types';
export interface FormInputDateProps extends Omit<InputDateProps, keyof FormFieldProps>, FormFieldProps {
}
export declare function FormInputDate({ inputRef, onchange, disabled, validation, ...props }: FormInputDateProps): any;
