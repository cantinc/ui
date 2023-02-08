import { type FlexProps } from '../../layout';
export interface TitleProps extends FlexProps<HTMLHeadingElement> {
    h?: 1 | 2 | 3 | 4 | 5 | 6;
    text?: string;
}
export declare function Title({ h, text, ...props }?: TitleProps): any;
