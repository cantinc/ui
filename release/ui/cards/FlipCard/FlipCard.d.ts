import { type StateProp } from '@innet/dom';
import { type CardProps } from '../Card';
export type FlipCardProps<E extends HTMLElement = HTMLElement, R = {}, S = any> = CardProps<E, R & {
    flip: StateProp<boolean>;
}, S>;
export declare function FlipCard<E extends HTMLElement = HTMLElement>({ flip, flex, inline, onclick, ...props }?: FlipCardProps<E>): any;
