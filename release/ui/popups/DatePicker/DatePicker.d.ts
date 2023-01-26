import { StateProp } from '@innet/dom';
import { Cache, State } from 'watch-state';
import { ModalProps } from '../Modal';
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
    goBackText?: any;
    todayText?: any;
}
export declare function DatePicker({ apply, min, max, selector, defaultValue, value, onChange, rotationTop, goBackText, todayText, onApply, ...props }?: DatePickerProps): any;
