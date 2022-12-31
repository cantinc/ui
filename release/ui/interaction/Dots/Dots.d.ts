import { StateProp } from '@innet/dom';
import { FlexProps } from '../../layout';
export interface DotsProps extends Omit<FlexProps<HTMLDivElement>, 'onchange'> {
    count: number;
    size?: StateProp<number>;
    autoscroll?: number | boolean;
    progress?: boolean;
    value?: StateProp<number>;
    onchange?: (value: number) => void;
}
export declare function Dots({ ref, count, autoscroll, style, size, progress, value, onchange, ...props }: DotsProps): any;
