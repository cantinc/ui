import { InputProps } from '../../interaction';
export interface SearchInputProps extends Omit<InputProps, 'value'> {
    key: string;
}
export declare function SearchInput({ key, oninput, ...props }: SearchInputProps): any;
