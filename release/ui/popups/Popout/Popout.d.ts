import { type HTMLStyleProp, Ref, type StateProp } from '@innet/dom';
import { type FlexProps } from '../../layout';
interface PopoutElementProps extends Omit<FlexProps, 'element'> {
    element?: Ref<HTMLElement>;
    contentStyle?: HTMLStyleProp;
    onhide: () => void;
    rootRef?: Ref<HTMLDivElement>;
}
export interface PopoutProps extends Omit<PopoutElementProps, 'onhide'> {
    show?: StateProp<any>;
    onhide?: () => void;
}
export interface PopoutElementData {
    rect: DOMRect;
    styles: CSSStyleDeclaration;
}
export declare function Popout({ show, onhide, ...props }: PopoutProps): any;
export {};
