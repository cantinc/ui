import { type TouchHidePlacement } from '../../../hooks';
import { type CloseButtonPlacement } from '../../buttons';
import { type IconProp } from '../../icons';
import { type FlexProps } from '../../layout';
export interface DrawerProps extends Omit<FlexProps, 'onclose'> {
    size?: number;
    placement?: TouchHidePlacement;
    closeButtonPlacement?: CloseButtonPlacement;
    closeIcon?: IconProp;
    onclose?: (result: string) => void;
}
export declare function Drawer({ onclose, size, placement, closeButtonPlacement, closeIcon, style, ref, ...props }?: DrawerProps): any;
