import { HTMLStyleProps, StateProp } from '@innet/dom';
export interface OptionProps extends HTMLStyleProps<HTMLDivElement> {
    value: string;
    label?: string;
    showValues?: boolean;
    preselected?: StateProp<boolean>;
    selected?: StateProp<boolean>;
    onPreselect?: () => void;
    onSelect?: () => void;
}
export declare function Option({ value, label, showValues, preselected, selected, onPreselect, onSelect, onmousedown, onmouseenter, ref, ...props }: OptionProps): any;
