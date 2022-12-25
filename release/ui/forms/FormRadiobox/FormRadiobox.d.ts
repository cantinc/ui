import { RadioboxProps } from '../../interaction';
import { FormFieldProps } from '../Form';
export interface FormRadioboxProps extends Omit<RadioboxProps, keyof FormFieldProps>, FormFieldProps {
}
export declare function FormRadiobox({ disabled, onchange, defaultValue, validation, ...props }: FormRadioboxProps): any;
