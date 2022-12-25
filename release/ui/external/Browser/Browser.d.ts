import { HTMLStyleProps } from '@innet/dom';
export interface IframeProps extends HTMLStyleProps<HTMLDivElement> {
    height?: number | 'auto';
}
export declare function Browser({ height, ...props }?: IframeProps): any;
