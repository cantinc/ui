import { StateProp } from '@innet/dom';
import { FlexProps } from '../Flex';
export interface ImageProps extends FlexProps {
    src: StateProp<string>;
    size: StateProp<number>;
    ratio?: StateProp<number | [number, number]>;
    radius?: StateProp<number | string>;
}
export declare function Image({ style, src, ratio, size, radius, ...props }: ImageProps): any;
