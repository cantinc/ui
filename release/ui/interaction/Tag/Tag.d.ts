import { type CheckProps } from '../../prototypes';
export interface TagProps extends CheckProps {
    type?: 'checkbox' | 'radio';
}
export declare function Tag({ type, label, ...props }: TagProps): any;
