import { ValidationError, Validator } from '@cantinc/utils';
import { StateProp } from '@innet/dom';
import { State } from 'watch-state';
import { FormContext } from '../../../hooks';
import { FlexProps } from '../../layout';
export declare type FormMethod = 'GET' | 'HEAD' | 'POST' | 'DELETE' | 'PUT' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
export interface FormProps extends FlexProps<HTMLFormElement> {
    action?: StateProp<string>;
    loading?: State<boolean>;
    notification?: string;
    method?: FormMethod;
    onerror?: (form: FormContext, error?: any) => void;
    onsuccess?: (form: FormContext) => void;
}
export declare type FormErrorHandle = (error: ValidationError<any>, form: FormContext) => string | Promise<string>;
export declare type FormActionHandle = (action: string, form: FormContext, method: FormMethod) => Promise<any> | any;
export declare type FormNotificationHandle = (notification: string, form: FormContext, data?: any, action?: string, method?: FormMethod) => void;
export interface FormFieldProps<V = string> {
    name: string;
    defaultValue?: V;
    required?: boolean;
    disabled?: boolean;
    validation?: Validator<any, any>[];
    onchange?: (value: V) => void;
}
