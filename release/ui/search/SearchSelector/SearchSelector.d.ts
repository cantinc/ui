import { type SelectorProps } from '../../interaction';
export interface SearchSelectorProps extends Omit<SelectorProps, 'value'> {
    key: string;
}
export declare function SearchSelector({ key, oninput, ...props }: SearchSelectorProps): any;
