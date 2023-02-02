import { type SetProps } from '../../interaction';
export type FormSetProps<P> = SetProps<P> & {
    name: string;
    defaultValues?: Partial<P>[];
    requiredSet?: boolean;
};
export declare function FormSet<P extends object>({ defaultValues, value, onchange, requiredSet, name, ...props }: FormSetProps<P>): any;
