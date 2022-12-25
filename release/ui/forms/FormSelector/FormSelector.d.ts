import { SelectorProps } from '../../interaction';
import { FormFieldProps } from '../Form/types';
export interface FormSelectorProps extends Omit<SelectorProps, keyof FormFieldProps>, FormFieldProps {
}
export declare function FormSelector({ validation, disabled, inputRef, onchange, ...props }: FormSelectorProps): any;
