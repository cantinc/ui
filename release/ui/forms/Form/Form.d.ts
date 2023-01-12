import { Context } from '@innet/jsx';
import { FormActionHandle, FormErrorHandle, FormNotificationHandle, FormProps } from './types';
export declare const formErrorHandler: Context<FormErrorHandle, FormErrorHandle>;
export declare const formActionHandler: Context<FormActionHandle, FormActionHandle>;
export declare const formNotificationHandler: Context<FormNotificationHandle, FormNotificationHandle>;
export declare function Form({ loading, action, notification, method, onsuccess, onerror, ...props }?: FormProps): any;
