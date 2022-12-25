import { Ref, StateProp } from '@innet/dom';
import { FlexProps } from '../../layout';
interface PopoutElementProps extends Omit<FlexProps, 'element'> {
    element: Ref<HTMLElement>;
    contentStyle?: StateProp<string>;
}
export interface PopoutProps extends PopoutElementProps {
    show?: StateProp<boolean>;
}
export declare function Popout({ show, ...props }: PopoutProps): any;
export {};
