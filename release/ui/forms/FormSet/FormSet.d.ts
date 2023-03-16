import { type SetProps } from '../../interaction';
export type FormSetProps<P> = SetProps<P> & {
    name?: string | string[];
    defaultValues?: Partial<P>[];
    requiredSet?: boolean;
    removeValue?: string | Blob;
};
export declare function FormSet<P extends object>({ defaultValues, removeValue, value, onchange, requiredSet, name, ...props }: FormSetProps<P>): any;
