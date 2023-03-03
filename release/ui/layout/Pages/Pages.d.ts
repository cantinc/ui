import { Context } from '@innet/jsx';
import { type NavigationItemProps } from '../Navigation';
export type PagesMenu = PagesItemProps[];
export type PageAccessHandler = (nav: PagesItemProps) => any;
export interface PagesItemProps extends NavigationItemProps {
    slot: string;
    page: () => Promise<{
        default: Function;
        [key: string]: any;
    }>;
    menu?: PagesMenu;
}
export interface PagesProps {
    navigation: PagesMenu;
    prefix?: string;
    handleAccess?: PageAccessHandler;
    title?: string;
    titleSeparator?: string;
}
export declare const titleContext: Context<string, string>;
export declare const titleSeparatorContext: Context<string, string>;
export declare function splitPagesItem(navigation: PagesMenu, prefix: string, handleAccess?: PageAccessHandler, parent?: any): [NavigationItemProps[], any];
export declare function Pages({ navigation, prefix, title, titleSeparator, handleAccess, }: PagesProps): any;
