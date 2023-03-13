import { type StateProp } from '@innet/dom';
import { type FlexProps } from '../../layout';
export type CardProps<E extends HTMLElement = HTMLElement, R = {}, S = any> = FlexProps<E, R & {
    clickable?: StateProp<boolean>;
    border?: StateProp<number>;
    preventAnimation?: boolean;
    width?: StateProp<number>;
    height?: StateProp<number>;
    radius?: StateProp<number | string>;
}, S>;
export declare function Card<E extends HTMLElement = HTMLElement>({ onclick, clickable, border, preventAnimation, width, height, style, radius, ...props }?: CardProps<E>): any;
