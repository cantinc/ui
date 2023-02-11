import { type StateProp } from '@innet/dom';
import { type FlexProps } from '../../layout';
import { type TagProps } from '../Tag';
export interface TagsItem extends Omit<TagProps, 'type'> {
    value: string;
}
export type ITags = TagsItem[];
export interface TagsMainProps extends Omit<FlexProps, 'onchange'> {
    values?: ITags;
}
export interface TagsSingleProps extends TagsMainProps {
    value?: StateProp<string>;
    onchange?: (value: string) => void;
    multiple?: false;
}
export interface TagsMultipleProps extends TagsMainProps {
    value?: StateProp<string[]>;
    onchange?: (value: string[]) => void;
    multiple: true;
}
export type TagsProps = TagsSingleProps | TagsMultipleProps;
export declare function Tags({ values, multiple, value, onchange, ...props }?: TagsProps): any;
