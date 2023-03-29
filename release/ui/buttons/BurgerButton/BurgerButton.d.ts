import { type HTMLStyleProps, type StateProp } from '@innet/dom';
export interface BurgerButtonProps extends HTMLStyleProps<HTMLButtonElement> {
    size?: StateProp<number>;
    color?: StateProp<string>;
}
export declare function BurgerButton({ size, color, style, ...props }?: BurgerButtonProps): any;
