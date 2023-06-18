import { type ObservableProp, type StateProp } from '@innet/dom';
import { State } from 'watch-state';
import { type FlexProps } from '../../layout';
export interface CalendarGridCell {
    value: string;
    date: Date;
    current: boolean;
}
export interface CalendarProps extends Omit<FlexProps, 'onselect'> {
    value?: StateProp<Date>;
    rotationTop?: State<boolean>;
    activeHandler?: (date: CalendarGridCell) => boolean;
    selectedHandler?: (date: CalendarGridCell) => boolean;
    disableHandler?: (date: CalendarGridCell) => boolean;
    renderCell?: (date: ObservableProp<CalendarGridCell>) => any;
    cellHeight?: StateProp<number>;
    onselect?: (cell: CalendarGridCell) => void;
}
export declare const defaultCalendarCellRender: (item: ObservableProp<CalendarGridCell>) => any;
export declare function Calendar({ activeHandler, disableHandler, selectedHandler, cellHeight, renderCell, onselect, value, rotationTop, ...props }?: CalendarProps): Generator<any, void, unknown>;
