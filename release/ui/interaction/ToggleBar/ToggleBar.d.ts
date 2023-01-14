import { StateProp, WatchProp } from '@innet/dom';
import { IconProp } from '../../icons';
import { FlexProps } from '../../layout';
export interface ToggleBarValue {
    value: string;
    label?: any;
    icon?: IconProp;
}
export type ToggleBarOnChange = (value: string) => void;
export type ToggleBarItemAction = () => void;
export interface ToggleBarItemOptions {
    className: WatchProp<string>;
    onchange: ToggleBarItemAction;
    onfocus: ToggleBarItemAction;
    onblur: ToggleBarItemAction;
}
export type ToggleBarRenderValue = (item: ToggleBarValue, options: ToggleBarItemOptions) => any;
export type ToggleBarProps<E extends HTMLElement = HTMLElement> = FlexProps<E, {
    values: StateProp<ToggleBarValue[]>;
    value?: StateProp<string>;
    renderValue?: ToggleBarRenderValue;
    onchange?: ToggleBarOnChange;
}>;
export declare function defaultToggleBarRender({ value, label, icon }: ToggleBarValue, { className, onchange, onfocus, onblur, }: ToggleBarItemOptions): any;
export declare function ToggleBar({ values, value, onchange, renderValue, style, ...props }: ToggleBarProps): any;
