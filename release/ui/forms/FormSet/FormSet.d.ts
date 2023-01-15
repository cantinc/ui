import { SetProps } from '../../interaction';
export type FormSetProps<P> = SetProps<P> & {
    defaultValues?: Partial<P>[];
};
export declare function FormSet<P extends object>({ defaultValues, value, onchange, ...props }: FormSetProps<P>): any;
