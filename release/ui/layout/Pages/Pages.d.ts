import { NavigationItemProps } from '../Navigation';
export declare type PagesMenu = PagesItemProps[];
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
}
export declare function splitPagesItem(navigation: PagesMenu, prefix: string, parent?: any): [NavigationItemProps[], any];
export declare function Pages({ navigation, prefix, }: PagesProps): any;
