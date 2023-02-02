import { type FlexProps } from '../Flex';
export interface SpinBoxProps extends Exclude<FlexProps, 'vertical'> {
    loading: () => boolean;
    horizontal?: boolean;
}
export declare function SpinBox({ loading, horizontal, ...props }: SpinBoxProps): any;
