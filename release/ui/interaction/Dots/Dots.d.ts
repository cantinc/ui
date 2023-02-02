import { type StateProp } from '@innet/dom';
import { type FlexProps } from '../../layout';
export interface DotsProps extends Omit<FlexProps<HTMLDivElement>, 'onchange'> {
    count: number;
    size?: StateProp<number>;
    autoscroll?: StateProp<number | boolean>;
    progress?: boolean;
    value?: StateProp<number>;
    onchange?: (value: number) => void;
    onend?: () => void;
    circular?: boolean;
}
export declare function Dots({ ref, count, autoscroll, style, size, progress, value, onchange, onend, circular, ...props }: DotsProps): any;
