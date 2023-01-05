import { NavigationItemProps } from '../Navigation';
export declare type PagesMenu = PagesItemProps[];
export declare type PageAccessHandler = (nav: PagesItemProps) => any;
export interface PagesItemProps extends NavigationItemProps {
    slot: string;
    page: () => Promise<{
        default: Function;
    }>;
    menu?: PagesMenu;
}
export interface PagesProps {
    navigation: PagesMenu;
    prefix?: string;
    handleAccess?: PageAccessHandler;
}
export declare function splitPagesItem(navigation: PagesMenu, prefix: string, handleAccess?: PageAccessHandler, parent?: any): [NavigationItemProps[], any];
export declare function Pages({ navigation, prefix, handleAccess, }: PagesProps): any;
