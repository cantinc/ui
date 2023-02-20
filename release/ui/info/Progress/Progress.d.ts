import { type StateProp } from '@innet/dom';
import { type FlexProps } from '../../layout';
export interface ProgressProps extends FlexProps {
    value: StateProp<number>;
}
export declare function Progress({ style, value, ...props }: ProgressProps): any;
