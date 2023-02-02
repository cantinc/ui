import { type StateProp } from '@innet/dom';
import { type FlexProps } from '../Flex';
export type ImageProps<E extends HTMLElement = HTMLElement> = FlexProps<E, {
    src: StateProp<string>;
    size: StateProp<number>;
    ratio?: StateProp<number | [number, number]>;
    radius?: StateProp<number | string>;
}>;
export declare function Image({ style, src, ratio, size, radius, ...props }: ImageProps): any;
