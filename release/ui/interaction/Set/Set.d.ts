import { LoopItem, StateProp } from '@innet/dom';
export type SetProps<P> = Omit<P, 'value' | 'onchange' | 'element'> & {
    value?: StateProp<P[]>;
    onchange?: (value: P[]) => void;
    element: (props: P) => any;
    handleItemProps?: (index: LoopItem<P>) => P;
};
export declare function Set<P extends object>({ value, onchange, element: Element, handleItemProps, ...props }: SetProps<P>): any;
