import { type StateProp } from '@innet/dom';
import { Cache, State } from 'watch-state';
import { type ModalProps } from '../Modal';
export type DataPickerSelector = 'date' | 'month' | 'year';
export declare const dataPickerCellHeight: Cache<number>;
export interface DatePickerProps extends ModalProps {
    selector?: State<DataPickerSelector>;
    value?: StateProp<Date>;
    defaultValue?: StateProp<Date | undefined>;
    onChange?: (date: Date) => void;
    onApply?: (date: Date) => void;
    apply?: any;
    rotationTop?: State<boolean>;
    min?: Date;
    max?: Date;
}
export declare function DatePicker({ apply, min, max, selector, defaultValue, value, onChange, rotationTop, onApply, ...props }?: DatePickerProps): any;
