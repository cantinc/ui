import { Ref } from '@innet/dom';
import { State } from 'watch-state';
export type TouchHidePlacement = 'left' | 'top' | 'right' | 'bottom';
export interface TouchHideOptions {
    hide: () => void;
    element?: Ref<HTMLElement>;
    placement?: TouchHidePlacement;
    length?: number;
    touchStart?: (e: TouchEvent) => void;
    touchEnd?: () => void;
}
export declare function useTouchHide({ hide, element, placement, length, touchStart, touchEnd, }: TouchHideOptions): {
    touched: State<boolean>;
    touchHide: State<number>;
    handleTouchStart(e: TouchEvent): void;
    handleTouchMove(e: TouchEvent): void;
    handleTouchEnd(): void;
};
