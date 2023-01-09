import { UploadProps } from '../../interaction';
import { FormFieldProps } from '../Form/types';
export interface FormUploadProps extends Omit<UploadProps, keyof FormFieldProps>, FormFieldProps<File[]> {
}
export declare function FormUpload({ ref, onchange, disabled, validation, defaultValue, hint, ...props }: FormUploadProps): any;
