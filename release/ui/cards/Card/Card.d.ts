import { StateProp } from '@innet/dom';
import { FlexProps } from '../../layout';
export interface CardProps extends FlexProps {
    clickable?: StateProp<boolean>;
    loading?: StateProp<boolean>;
    preventAnimation?: boolean;
}
export declare function Card({ onclick, clickable, loading, preventAnimation, ...props }?: CardProps): any;
