import { type HTMLStyleProps, type StateProp } from '@innet/dom';
import { type ButtonProps } from '../../buttons';
export interface ModalProps extends Omit<HTMLStyleProps<HTMLDivElement>, 'onclose'> {
    height?: StateProp<number | string>;
    width?: StateProp<number | string>;
    buttons?: string[];
    headButtons?: string[];
    buttonProps?: Record<string, ButtonProps>;
    onclose?: (result: string, close: () => void) => void;
    onclosed?: (result: string) => void;
    onshow?: () => void;
}
export declare function Modal({ buttons, width, height, style, headButtons, buttonProps, onclosed, onclose, onshow, onmousedown, ...props }?: ModalProps): any;
