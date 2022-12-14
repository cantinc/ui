import { StateProp } from '@innet/dom';
import { State } from 'watch-state';
import { DropdownPlacement, MenuOption } from '../../popups';
import { InputProps } from '../Input';
export declare type SelectorDisplay = 'auto' | 'value';
export interface SelectorProps extends InputProps {
    values?: StateProp<MenuOption[]>;
    placement?: DropdownPlacement;
    searchValue?: StateProp<string>;
    showValues?: boolean;
    display?: SelectorDisplay;
    search?: boolean;
    exact?: boolean;
    arrow?: boolean;
    displayState?: State<string>;
    onsearch?: (search: string) => void;
}
export declare function Selector({ ref, placement, value, values, oninput, searchValue, showValues, display, search, exact, arrow, onsearch, ...props }?: SelectorProps): any;
