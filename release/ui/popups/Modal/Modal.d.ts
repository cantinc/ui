import { HTMLStyleProps } from '@innet/dom';
import { ButtonProps } from '../../buttons';
export interface ModalProps extends Omit<HTMLStyleProps<HTMLDivElement>, 'onclose'> {
    width?: number;
    buttons?: string[];
    headButtons?: string[];
    buttonProps?: {
        [K: string]: ButtonProps;
    };
    onclose?: (result: string, close: () => void) => void;
    onclosed?: (result: string) => void;
    onshow?: () => void;
}
export declare function Modal({ buttons, width, style, headButtons, buttonProps, onclosed, onclose, onshow, onmousedown, ...props }?: ModalProps): any;
