import { StateProp, WatchProp } from '@innet/dom';
import { IconProp } from '../../icons';
import { FlexProps } from '../../layout';
export interface ToggleBarValue {
    value: string;
    label?: any;
    icon?: IconProp;
}
export declare type ToggleBarOnChange = (value: string) => void;
export declare type ToggleBarItemAction = () => void;
export interface ToggleBarItemOptions {
    className: WatchProp<string>;
    onchange: ToggleBarItemAction;
    onfocus: ToggleBarItemAction;
    onblur: ToggleBarItemAction;
}
export declare type ToggleBarRenderValue = (item: ToggleBarValue, options: ToggleBarItemOptions) => any;
export declare type ToggleBarProps<E extends HTMLElement = HTMLElement> = FlexProps<E, {
    values: StateProp<ToggleBarValue[]>;
    value?: StateProp<string>;
    renderValue?: ToggleBarRenderValue;
    onchange?: ToggleBarOnChange;
}>;
export declare function defaultToggleBarRender({ value, label, icon }: ToggleBarValue, { className, onchange, onfocus, onblur, }: ToggleBarItemOptions): any;
export declare function ToggleBar({ values, value, onchange, renderValue, style, ...props }: ToggleBarProps): any;
