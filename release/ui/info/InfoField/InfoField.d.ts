import { type StateProp } from '@innet/dom';
import { type FlexProps } from '../../layout';
export type InfoFieldProps<E extends HTMLElement = HTMLElement> = FlexProps<E, {
    label?: StateProp<string>;
    value?: StateProp<string>;
}>;
export declare function InfoField({ label, value, ...props }: InfoFieldProps): any;
