import { Ref, StateProp } from '@innet/dom';
import { FlexProps } from '../../layout';
export declare type DropdownPlacement = 'bottom' | 'top';
export interface DropdownProps extends Omit<FlexProps, 'element'> {
    element: Ref<HTMLElement>;
    show: StateProp<boolean>;
    placement?: DropdownPlacement;
}
export declare function DropdownContent({ element, onclick, style, placement, ...props }: Omit<DropdownProps, 'show' | 'onhide'>): any;
export declare function Dropdown({ show, ...props }: DropdownProps): any;
