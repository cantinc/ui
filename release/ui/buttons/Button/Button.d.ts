import { StateProp } from '@innet/dom';
import { FlexProps } from '../../layout';
export declare type ButtonViews = 'primary' | 'secondary' | 'negative' | 'positive';
export declare type ButtonProps<E extends HTMLElement = HTMLButtonElement> = FlexProps<E, {
    view?: ButtonViews;
    loading?: StateProp<boolean>;
    disabled?: StateProp<boolean>;
}>;
export declare function Button<E extends HTMLElement = HTMLButtonElement>({ view, loading, disabled, ...props }?: ButtonProps<E>): any;
