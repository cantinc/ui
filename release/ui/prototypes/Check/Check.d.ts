import { HTMLStyleProps, StateProp } from '@innet/dom';
export type OmitCheckProps = 'onchange' | '_checked' | '$checked' | '_disabled' | '$disabled';
declare const styles: {
    readonly root: string;
    readonly checked: "";
    readonly disabled: "";
    readonly input: "";
    readonly icon: "";
};
export interface CheckProps extends Omit<HTMLStyleProps<HTMLInputElement, typeof styles>, OmitCheckProps> {
    onchange?: (value: boolean) => void;
    label?: StateProp<any>;
}
export declare function Check({ label, checked, onchange, disabled, ...props }: CheckProps): any;
export {};
