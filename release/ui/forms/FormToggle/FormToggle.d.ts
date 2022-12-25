import { ToggleProps } from '../../interaction';
import { FormFieldProps } from '../Form';
export interface FormToggleProps extends Omit<ToggleProps, keyof FormFieldProps>, FormFieldProps {
}
export declare function FormToggle({ ref, disabled, onchange, ...props }: FormToggleProps): any;
