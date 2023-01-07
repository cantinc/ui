import { InputMaskProps } from '../../interaction';
import { FormFieldProps } from '../Form/types';
export interface FormInputMaskProps extends Omit<InputMaskProps, keyof FormFieldProps>, FormFieldProps {
}
export declare function FormInputMask({ inputRef, onchange, disabled, validation, ...props }: FormInputMaskProps): any;
