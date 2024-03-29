import { Ref, type StateProp } from '@innet/dom';
import { type FlexProps } from '../../layout';
export type DropdownPlacement = 'bottom' | 'top';
export interface DropdownProps extends Omit<FlexProps, 'element'> {
    element: Ref<HTMLElement>;
    show: StateProp<boolean>;
    placement?: DropdownPlacement;
}
export declare function DropdownContent({ element, onclick, style, placement, ...props }: Omit<DropdownProps, 'show' | 'onhide'>): any;
export declare function Dropdown({ show, ...props }: DropdownProps): any;
