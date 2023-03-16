import { type ValidationError, type ValidationMap, type Validator } from '@cantinc/utils';
import { type StateProp } from '@innet/dom';
import { type State } from 'watch-state';
import { type FormContext } from '../../../hooks';
import { type FlexProps } from '../../layout';
export type FormMethod = 'GET' | 'HEAD' | 'POST' | 'DELETE' | 'PUT' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
export interface FormProps extends FlexProps<HTMLFormElement> {
    action?: StateProp<string>;
    loading?: State<boolean>;
    notification?: string;
    validation?: ValidationMap<any>;
    method?: FormMethod;
    onerror?: (form: FormContext, error?: any) => void;
    onsuccess?: (form: FormContext) => void;
    oninvalid?: (error: ValidationError<any>, form: FormContext) => void;
}
export type FormErrorHandle = (error: ValidationError<any>, form: FormContext) => string | Promise<string>;
export type FormInvalidHandle = (error: ValidationError<any>, form: FormContext) => void;
export type FormActionHandle = (form: FormContext) => Promise<any> | any;
export type FormNotificationHandle = (form: FormContext) => void;
export interface FormFieldProps<V = string> {
    name: string;
    defaultValue?: V;
    value?: State<V>;
    required?: boolean;
    disabled?: boolean;
    removeValue?: V;
    validation?: Validator<any, any>[];
    onchange?: (value: V) => void;
}
