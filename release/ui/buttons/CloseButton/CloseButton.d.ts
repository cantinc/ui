import { type StateProp } from '@innet/dom';
import { type IconProp } from '../../icons';
import { type FlexProps } from '../../layout';
export type CloseButtonPlacement = 'topLeft' | 'top' | 'topRight' | 'right' | 'bottomRight' | 'bottom' | 'bottomLeft' | 'left';
export type CloseButtonProps<R = {}, S = any> = FlexProps<HTMLButtonElement, R & {
    placement?: CloseButtonPlacement;
    icon?: IconProp;
    size?: StateProp<number>;
    offset?: StateProp<number>;
}, S>;
export declare function CloseButton({ placement, icon, offset, size, style, ...props }?: CloseButtonProps): any;
