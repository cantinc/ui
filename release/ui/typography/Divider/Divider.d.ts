import { type HTMLStyleProps, type StateProp } from '@innet/dom';
interface DividerPros extends HTMLStyleProps {
    vertical?: StateProp<boolean>;
}
export declare function Divider({ vertical, ...props }?: DividerPros): any;
export {};
