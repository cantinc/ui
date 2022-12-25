import { StateProp } from '@innet/dom';
import { ToggleProps } from '../../interaction';
export interface SearchToggleProps extends Omit<ToggleProps, 'checked'> {
    key: string;
    value?: StateProp<string>;
}
export declare function SearchToggle({ key, value, onchange, ...props }: SearchToggleProps): any;
