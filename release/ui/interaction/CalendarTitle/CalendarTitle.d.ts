import { type HTMLStyleProps, type StateProp } from '@innet/dom';
import { State } from 'watch-state';
export interface CalendarTitleProps extends HTMLStyleProps<HTMLDivElement> {
    value?: StateProp<Date>;
    onChange?: (date: Date) => void;
    rotationTop?: State<boolean>;
    onNext?: () => void;
    onPrev?: () => void;
    onClick?: () => void;
    min?: Date;
    max?: Date;
}
export declare const minCalendarDate: Date;
export declare const maxCalendarDate: Date;
export declare function CalendarTitle({ value, onChange, rotationTop, onNext, onPrev, onClick, min, max, ...props }?: CalendarTitleProps): any;
