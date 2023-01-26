import { HTMLStyleProps, StateProp } from '@innet/dom';
export interface SpaceProps extends HTMLStyleProps<HTMLSpanElement> {
    flex?: StateProp<number>;
    gap?: StateProp<number>;
}
export declare function Space({ flex, style, gap, ...props }?: SpaceProps): any;
