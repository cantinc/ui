import { type CheckboxProps } from '../../interaction';
import { type FormFieldProps } from '../Form';
export interface FormCheckboxProps extends Omit<CheckboxProps, keyof FormFieldProps>, FormFieldProps {
}
export declare function FormCheckbox({ ref, disabled, onchange, ...props }: FormCheckboxProps): any;
