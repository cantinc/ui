import { LoopItem, StateProp } from '@innet/dom';
import { Context } from '@innet/jsx';
export type SetPropsHandler<P> = (item: LoopItem<P>, Component: (props: P) => any) => P;
export type SetProps<P> = Omit<P, 'value' | 'onchange' | 'element'> & {
    value?: StateProp<Partial<P>[]>;
    onchange?: (value: Partial<P>[]) => void;
    element: (props: P) => any;
    handleItemProps?: SetPropsHandler<P>;
};
export declare const setPropsHandler: Context<SetPropsHandler<any>, SetPropsHandler<any>>;
export declare function Set<P extends object>({ value, onchange, element: Element, handleItemProps, ...props }: SetProps<P>): any;
