import { StateProp } from '@innet/dom';
import { FlexProps } from '../../layout';
export declare type CardProps<E extends HTMLElement = HTMLElement> = FlexProps<E, {
    clickable?: StateProp<boolean>;
    loading?: StateProp<boolean>;
    preventAnimation?: boolean;
}>;
export declare function Card<E extends HTMLElement = HTMLElement>({ onclick, clickable, loading, preventAnimation, ...props }?: CardProps<E>): any;
