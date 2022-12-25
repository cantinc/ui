import { FlexProps } from '../../layout';
export interface CardProps extends FlexProps {
    clickable?: boolean;
    preventAnimation?: boolean;
}
export declare function Card({ onclick, clickable, preventAnimation, ...props }?: CardProps): any;
