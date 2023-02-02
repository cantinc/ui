import { type HTMLStyleProps, type LinkProps, type StateProp } from '@innet/dom';
import { type FlexProps } from '../Flex';
export type NavigationMenu = NavigationItemProps[];
export interface NavigationItemProps extends LinkProps {
    children?: any;
    menu?: NavigationMenu;
    access?: StateProp<boolean>;
}
export interface NavigationItemsProps extends HTMLStyleProps {
}
export interface NavigationProps extends FlexProps {
    menu?: NavigationMenu;
}
declare function NavigationItem({ children, menu, access, ...props }?: NavigationItemProps): any;
declare function NavigationItems(props: NavigationItemsProps): Generator<any, void, unknown>;
export declare function Navigation({ menu, ...props }?: NavigationProps): any;
export declare namespace Navigation {
    var Item: typeof NavigationItem;
    var Items: typeof NavigationItems;
}
export {};
