import { type UploadFile, type UploadProps } from '../../interaction';
import { type FormFieldProps } from '../Form/types';
export interface FormUploadProps extends Omit<UploadProps, keyof FormFieldProps>, FormFieldProps<UploadFile[]> {
}
export declare function FormUpload(props: FormUploadProps): import("@innet/jsx").JSXElement<any, import("@innet/jsx").Props, import("@innet/jsx").Children>;
