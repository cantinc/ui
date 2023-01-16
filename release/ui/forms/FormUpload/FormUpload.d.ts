import { UploadFile, UploadProps } from '../../interaction';
import { FormFieldProps } from '../Form/types';
export interface FormUploadProps extends Omit<UploadProps, keyof FormFieldProps>, FormFieldProps<UploadFile[]> {
}
export declare function FormUpload(props: FormUploadProps): any;
