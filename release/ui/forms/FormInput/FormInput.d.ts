import { InputProps } from '../../interaction';
import { FormFieldProps } from '../Form/types';
export interface FormInputProps extends Omit<InputProps, keyof FormFieldProps>, FormFieldProps {
}
export declare function FormInput({ inputRef, onchange, disabled, validation, ...props }: FormInputProps): any;
