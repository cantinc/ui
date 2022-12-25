import { TextAreaProps } from '../../interaction';
import { FormFieldProps } from '../Form';
export interface FormTextAreaProps extends Omit<TextAreaProps, keyof FormFieldProps>, FormFieldProps {
}
export declare function FormTextArea({ inputRef, onchange, disabled, validation, ...props }: FormTextAreaProps): any;
