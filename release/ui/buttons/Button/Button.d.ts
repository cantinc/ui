import { type StateProp } from '@innet/dom';
import { type FlexProps } from '../../layout';
export type ButtonViews = 'primary' | 'secondary' | 'negative' | 'positive';
export type ButtonProps<E extends HTMLElement = HTMLButtonElement> = FlexProps<E, {
    view?: ButtonViews;
    loading?: StateProp<boolean>;
    disabled?: StateProp<boolean>;
}>;
export declare function Button<E extends HTMLElement = HTMLButtonElement>({ view, loading, disabled, ...props }?: ButtonProps<E>): any;
