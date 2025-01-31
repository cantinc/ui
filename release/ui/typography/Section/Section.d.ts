import { type StateProp } from '@innet/dom';
import { type FlexProps } from '../../layout';
import { type TitleProps } from '../Title';
export interface SectionStyles {
    root: any;
    title: any;
}
export interface SectionProps extends FlexProps<HTMLDivElement, {}, SectionStyles> {
    title?: string;
    subtitle?: StateProp<string>;
    titleProps?: TitleProps;
}
export declare function Section({ title, titleProps, subtitle, ...props }?: SectionProps): any;
