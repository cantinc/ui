import { type HTMLStyleProps, type StateProp } from '@innet/dom';
export interface OptionProps extends HTMLStyleProps<HTMLDivElement> {
    value: string;
    label?: string;
    hint?: string;
    showValues?: boolean;
    preselected?: StateProp<boolean>;
    selected?: StateProp<boolean>;
    onPreselect?: () => void;
    onSelect?: () => void;
}
export declare function Option({ value, label, hint, showValues, preselected, selected, onPreselect, onSelect, onmousedown, onmouseenter, ref, ...props }: OptionProps): any;
