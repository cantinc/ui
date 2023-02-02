import { type ToggleBarProps } from '../../interaction';
export interface SearchToggleBarProps extends Pick<ToggleBarProps, 'values'> {
    key: string;
    [key: string]: any;
}
export declare function SearchToggleBar({ key, ...props }: SearchToggleBarProps): any;
