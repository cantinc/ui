import { type HTMLStyleProps, type StateProp } from '@innet/dom';
export interface BurgerButtonProps extends HTMLStyleProps<HTMLButtonElement> {
    size?: StateProp<number>;
}
export declare function BurgerButton({ size, style, ...props }?: BurgerButtonProps): any;
