import { TouchHidePlacement } from '../../../hooks';
import { FlexProps } from '../../layout';
export interface DrawerProps extends Omit<FlexProps, 'onclose'> {
    size?: number;
    placement?: TouchHidePlacement;
    onclose?: (result: string) => void;
}
export declare function Drawer({ onclose, size, placement, style, ref, ...props }?: DrawerProps): any;
