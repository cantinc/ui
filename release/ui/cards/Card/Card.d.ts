import { StateProp } from '@innet/dom';
import { FlexProps } from '../../layout';
export type CardProps<E extends HTMLElement = HTMLElement> = FlexProps<E, {
    clickable?: StateProp<boolean>;
    loading?: StateProp<boolean>;
    preventAnimation?: boolean;
    width?: StateProp<number>;
    height?: StateProp<number>;
    radius?: StateProp<number | string>;
}>;
export declare function Card<E extends HTMLElement = HTMLElement>({ onclick, clickable, loading, preventAnimation, width, height, style, radius, ...props }?: CardProps<E>): any;
