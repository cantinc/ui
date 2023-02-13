import { type TagsMultipleProps, type TagsSingleProps } from '../../interaction';
export type SearchTagsProps = (Omit<TagsMultipleProps, 'value'> | Omit<TagsSingleProps, 'value'>) & {
    key: string;
};
export declare function SearchTags({ key, onchange, multiple, ...props }: SearchTagsProps): any;
