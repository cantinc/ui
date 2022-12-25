import { FlexProps } from '../../layout';
export declare type DrawerPlacement = 'left' | 'top' | 'right' | 'bottom';
export interface DrawerProps extends Omit<FlexProps, 'onclose'> {
    size?: number;
    placement?: DrawerPlacement;
    onclose?: (result: string) => void;
}
export declare function Drawer({ onclose, size, placement, style, ...props }?: DrawerProps): any;
