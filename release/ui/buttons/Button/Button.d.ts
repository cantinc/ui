import { LinkProps, StateProp } from '@innet/dom';
import { FlexProps } from '../../layout';
export declare type ButtonViews = 'primary' | 'secondary' | 'negative' | 'positive';
export interface ButtonProps extends FlexProps<HTMLButtonElement>, Omit<LinkProps, 'ref' | 'class'> {
    view?: ButtonViews;
    loading?: StateProp<boolean>;
    link?: boolean;
}
export declare function Button({ view, type, loading, disabled, link, ...props }?: ButtonProps): any;
