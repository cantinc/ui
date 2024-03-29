import { type StateProp } from '@innet/dom';
import { type DropdownProps } from '../Dropdown';
export interface MenuOption {
    value: string;
    label?: string;
    hint?: string;
}
export interface DropdownMenuProps extends DropdownProps {
    values?: StateProp<MenuOption[]>;
    select?: StateProp<string>;
    preselect?: StateProp<string>;
    showValues?: boolean;
    onSelect?: (value: string) => void;
    onPreselect?: (value: string) => void;
}
export declare function DropdownMenu({ values, showValues, select, preselect, onSelect, onPreselect, ...props }: DropdownMenuProps): any;
