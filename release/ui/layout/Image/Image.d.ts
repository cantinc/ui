import { type StateProp } from '@innet/dom';
import { type FlexProps } from '../Flex';
export type ImageProps<E extends HTMLElement = HTMLElement, R = {}, S = any> = FlexProps<E, R & {
    src: StateProp<string>;
    size: StateProp<number>;
    ratio?: StateProp<number | [number, number]>;
    radius?: StateProp<number | string>;
    fallback?: StateProp<string>;
}, S>;
export declare function Image<E extends HTMLElement = HTMLElement>({ src, fallback, size, ratio, radius, style, loading, ref, ...props }: ImageProps<E>): any;
