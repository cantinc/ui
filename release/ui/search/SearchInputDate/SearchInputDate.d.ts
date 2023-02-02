import { type InputDateProps } from '../../interaction';
export interface SearchInputDateProps extends Omit<InputDateProps, 'value'> {
    key: string;
}
export declare function SearchInputDate({ key, oninput, ...props }: SearchInputDateProps): import("@innet/jsx").JSXElement<any, import("@innet/jsx").Props, import("@innet/jsx").Children>;
