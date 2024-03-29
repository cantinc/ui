import { Ref } from '@innet/dom';
import { type FormField } from '../useForm';
export declare function useField<V = string, E extends HTMLElement = HTMLInputElement>(defValue: V, ref?: Ref<E>): FormField<V, E>;
