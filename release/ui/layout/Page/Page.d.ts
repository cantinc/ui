import { FlexProps } from '../../layout/Flex';
export interface PageProps extends FlexProps {
}
export interface DelayPageProps extends PageProps {
    show?: number;
    hide?: number;
}
export declare function DelayPage({ show, hide, ...props }?: DelayPageProps): any;
export declare function Page(props: PageProps): any;
