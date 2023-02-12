import { type StateProp } from '@innet/dom';
import { type FlexProps } from '../Flex';
export interface SpinBoxProps extends FlexProps {
    loading: StateProp<boolean>;
}
export declare function SpinBox({ loading, ...props }: SpinBoxProps): any;
