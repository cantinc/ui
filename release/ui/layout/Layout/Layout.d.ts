import { FlexProps } from '../Flex';
export interface LayoutProps extends FlexProps {
    width?: number;
}
export declare function Layout({ width, style, ...props }?: LayoutProps): any;
