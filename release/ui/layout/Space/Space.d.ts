import { HTMLStyleProps, WatchProp } from '@innet/dom';
export interface SpaceProps extends HTMLStyleProps<HTMLSpanElement> {
    flex?: WatchProp<number>;
}
export declare function Space({ flex, style, ...props }?: SpaceProps): any;
