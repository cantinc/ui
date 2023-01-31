import { Context } from '@innet/jsx';
import { FormActionHandle, FormErrorHandle, FormInvalidHandle, FormNotificationHandle, FormProps } from './types';
export declare const formErrorHandler: Context<FormErrorHandle, FormErrorHandle>;
export declare const formInvalidHandler: Context<FormInvalidHandle, FormInvalidHandle>;
export declare const formActionHandler: Context<FormActionHandle, FormActionHandle>;
export declare const formNotificationHandler: Context<FormNotificationHandle, FormNotificationHandle>;
export declare function Form({ loading, action, notification, method, onsuccess, onerror, onreset, onsubmit, validation: validationProp, oninvalid, ref, ...props }?: FormProps): any;
