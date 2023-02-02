import { type RadioboxProps } from '../../interaction';
import { type FormFieldProps } from '../Form';
export interface FormRadioboxProps extends Omit<RadioboxProps, keyof FormFieldProps>, FormFieldProps {
}
export declare function FormRadiobox({ disabled, onchange, defaultValue, validation, ...props }: FormRadioboxProps): any;
