import { type ValidationMap, type Validator } from '@cantinc/utils';
import { type Ref } from '@innet/dom';
import { Context } from '@innet/jsx';
import { type State } from 'watch-state';
import { type FormProps } from '../../../ui';
export interface FormField<V, E extends HTMLElement> {
    name: string;
    state: State<V>;
    error: State<string>;
    element: Ref<E>;
    defaultValue?: V;
    removed?: boolean;
    validation?: Validator<any, any>[];
}
export interface FormContext extends FormProps {
    fields: Set<FormField<any, any>>;
    destroyed: boolean;
    loading: State<boolean>;
    ref: Ref<HTMLFormElement>;
    responseData?: any;
    submitData?: any;
    validation: ValidationMap<any>;
    touched: Record<string, boolean>;
}
export declare const formContext: Context<FormContext, FormContext>;
export declare function useForm(): FormContext;
