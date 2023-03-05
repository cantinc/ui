import { type StateProp } from '@innet/dom';
import { type FlexProps } from '../../layout';
import { type TitleProps } from '../Title';
export interface SectionProps extends FlexProps<HTMLDivElement> {
    title?: string;
    subTitle?: StateProp<string>;
    titleProps?: TitleProps;
}
export declare function Section({ title, titleProps, subTitle, ...props }?: SectionProps): any;
