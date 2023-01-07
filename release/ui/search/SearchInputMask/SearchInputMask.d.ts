import { InputMaskProps } from '../../interaction';
export interface SearchInputMaskProps extends Omit<InputMaskProps, 'value'> {
    key: string;
}
export declare function SearchInputMask({ key, oninput, ...props }: SearchInputMaskProps): any;
