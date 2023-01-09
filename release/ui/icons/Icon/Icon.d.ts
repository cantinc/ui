import { CustomIconProps } from './types';
declare const iconsImports: {
    readonly default: () => Promise<typeof import("./icons/DefaultIcon")>;
    readonly cross: () => Promise<typeof import("./icons/CrossIcon")>;
    readonly edit: () => Promise<typeof import("./icons/EditIcon")>;
    readonly calendar: () => Promise<typeof import("./icons/CalendarIcon")>;
    readonly chevron: () => Promise<typeof import("./icons/ChevronIcon")>;
    readonly chevronUp: () => Promise<typeof import("./icons/ChevronUpIcon")>;
    readonly menu: () => Promise<typeof import("./icons/MenuIcon")>;
};
export declare type IconProp = keyof typeof iconsImports;
export declare const icons: ("default" | "cross" | "edit" | "calendar" | "chevron" | "chevronUp" | "menu")[];
export interface IconProps extends CustomIconProps {
    icon?: IconProp;
}
export declare function Icon({ icon, ...props }?: IconProps): Promise<any>;
export {};
