import { HTMLStyleProps, StateProp } from '@innet/dom';
export declare type ArrowDirection = 'down' | 'top' | 'left' | 'right';
export interface ArrowProps extends HTMLStyleProps<HTMLDivElement> {
    direction?: StateProp<ArrowDirection>;
    color?: StateProp<string>;
    size?: StateProp<number>;
}
export declare function Arrow({ direction, style, color, size, ...props }?: ArrowProps): any;
