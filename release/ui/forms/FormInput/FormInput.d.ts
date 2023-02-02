import { type InputProps } from '../../interaction';
import { type FormFieldProps } from '../Form/types';
export interface FormInputProps extends Omit<InputProps, keyof FormFieldProps>, FormFieldProps {
}
export declare function FormInput({ inputRef, onchange, disabled, validation, ...props }: FormInputProps): any;
