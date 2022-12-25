import { HTMLStyleProps } from '@innet/dom';
export declare type BurgerButtonSizeGenerator<X extends number, Y extends unknown[] = [3, 3, 3], Z extends number = never> = Y['length'] extends X ? Z : BurgerButtonSizeGenerator<X, [3, 3, 3, ...Y], Z | Y['length']>;
export declare type BurgerButtonSize = Exclude<BurgerButtonSizeGenerator<999>, 3>;
export interface BurgerButtonProps extends HTMLStyleProps<HTMLButtonElement> {
    size?: BurgerButtonSize;
}
export declare function BurgerButton({ size, style, ...props }?: BurgerButtonProps): any;
