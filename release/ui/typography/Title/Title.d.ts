import { type StateProp } from '@innet/dom';
import { type FlexProps } from '../../layout';
export interface TitleProps extends FlexProps<HTMLHeadingElement> {
    h?: 1 | 2 | 3 | 4 | 5 | 6;
    title?: string;
    subTitle?: StateProp<string>;
}
export declare function Title({ h, title, subTitle, ...props }?: TitleProps): any;
