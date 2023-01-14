import { LoopItem, StateProp } from '@innet/dom';
import { Context } from '@innet/jsx';
export type SetPropertyHandler<P> = (item: LoopItem<P>, Component: (props: P) => any) => P;
export type SetProps<P> = Omit<P, 'value' | 'onchange' | 'element'> & {
    value?: StateProp<P[]>;
    onchange?: (value: P[]) => void;
    element: (props: P) => any;
    handleItemProps?: SetPropertyHandler<P>;
};
export declare const setPropsHandler: Context<SetPropertyHandler<any>, SetPropertyHandler<any>>;
export declare function Set<P extends object>({ value, onchange, element: Element, handleItemProps, ...props }: SetProps<P>): any;
