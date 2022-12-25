import { HTMLStyleProps, StateProp } from '@innet/dom';
export interface DetailsProps extends HTMLStyleProps<HTMLDetailsElement> {
    onToggle?: (value: boolean) => void;
    open?: StateProp<boolean>;
}
export declare function Details({ ref, style, open, onToggle, ...props }?: DetailsProps): Generator<any, void, unknown>;
