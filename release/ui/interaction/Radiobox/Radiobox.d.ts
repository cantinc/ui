import { type StateProp } from '@innet/dom';
import { State } from 'watch-state';
import { type FlexProps } from '../../layout';
import { type CheckProps } from '../../prototypes';
export interface RadioItem extends CheckProps {
    value: StateProp<string>;
}
export interface RadioboxProps extends Omit<FlexProps, 'onchange'> {
    value?: StateProp<string> | State<string>;
    values?: StateProp<RadioItem[]>;
    disabled?: StateProp<boolean>;
    name?: StateProp<string>;
    onchange?: (value: string) => void;
}
export declare function Radiobox({ values, value, onchange, name, disabled, ...props }?: RadioboxProps): any;
