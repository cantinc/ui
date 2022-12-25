import { StateProp } from '@innet/dom';
import { FlexProps } from '../Flex';
export interface ContentProps extends FlexProps {
    width?: StateProp<number>;
}
export declare function Content({ width, style, ...props }?: ContentProps): any;
