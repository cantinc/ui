import { Ref } from '@innet/dom';
import { State } from 'watch-state';
export type TouchHidePlacement = 'left' | 'top' | 'right' | 'bottom';
export interface TouchHideOptions {
    hide: () => void;
    element?: Ref<HTMLElement>;
    placement?: TouchHidePlacement;
    length?: number;
}
export declare function useTouchHide({ hide, element, placement, length, }: TouchHideOptions): {
    touched: State<boolean>;
    touchHide: State<number>;
    handleTouchStart(e: TouchEvent): void;
    handleTouchMove(e: TouchEvent): void;
    handleTouchEnd(): void;
};
