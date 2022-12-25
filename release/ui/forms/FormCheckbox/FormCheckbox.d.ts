import { CheckboxProps } from '../../interaction';
import { FormFieldProps } from '../Form';
export interface FormCheckboxProps extends Omit<CheckboxProps, keyof FormFieldProps>, FormFieldProps {
}
export declare function FormCheckbox({ ref, disabled, onchange, ...props }: FormCheckboxProps): any;
