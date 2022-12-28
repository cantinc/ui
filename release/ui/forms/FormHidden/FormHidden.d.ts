import { StateProp } from '@innet/dom';
export interface FormHiddenProps {
    name: string;
    value: StateProp<string>;
}
export declare function FormHidden({ name, value }: FormHiddenProps): void;
