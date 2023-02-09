import { type FlexProps } from '../../layout';
import { type TitleProps } from '../Title';
export interface SectionProps extends FlexProps<HTMLDivElement> {
    title?: string;
    titleProps?: TitleProps;
}
export declare function Section({ title, titleProps, ...props }?: SectionProps): any;
