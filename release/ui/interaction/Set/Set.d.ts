import { type ObservableProp, type StateProp } from '@innet/dom';
import { Context } from '@innet/jsx';
export type SetPropsHandler<P> = (item: ObservableProp<P>, index: ObservableProp<number>, Component: (props: P) => any, props: P) => P;
export type SetPropsAddHandler<P> = (props: P) => P;
export type SetProps<P> = Omit<P, 'value' | 'onchange' | 'element'> & {
    value?: StateProp<Partial<P>[]>;
    onchange?: (value: Partial<P>[]) => void;
    element: (props: P) => any;
    handleItemProps?: SetPropsHandler<P>;
    handleAddItemProps?: SetPropsAddHandler<P>;
};
export declare const setPropsHandler: Context<SetPropsHandler<any>, SetPropsHandler<any>>;
export declare function Set<P extends object>({ value, onchange, element: Element, handleItemProps, handleAddItemProps, ...props }: SetProps<P>): any;
