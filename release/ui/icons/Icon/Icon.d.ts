import { HTMLStyleProps, StateProp } from '@innet/dom';
export interface CustomIconProps extends HTMLStyleProps {
    size?: StateProp<number>;
    color?: StateProp<string>;
    color1?: StateProp<string>;
    color2?: StateProp<string>;
}
declare const iconsImports: {
    readonly default: () => Promise<typeof import("./icons/DefaultIcon")>;
    readonly cant: () => Promise<typeof import("./icons/CantIcon")>;
    readonly edit: () => Promise<typeof import("./icons/EditIcon")>;
    readonly calendar: () => Promise<typeof import("./icons/CalendarIcon")>;
    readonly chevron: () => Promise<typeof import("./icons/ChevronIcon")>;
    readonly chevronUp: () => Promise<typeof import("./icons/ChevronUpIcon")>;
    readonly chevronLeft: () => Promise<typeof import("./icons/ChevronLeftIcon")>;
    readonly chevronRight: () => Promise<typeof import("./icons/ChevronRightIcon")>;
    readonly cross: () => Promise<typeof import("./icons/CrossIcon")>;
    readonly info: () => Promise<typeof import("./icons/InfoIcon")>;
    readonly check: () => Promise<typeof import("./icons/CheckIcon")>;
    readonly menu: () => Promise<typeof import("./icons/MenuIcon")>;
    readonly user: () => Promise<typeof import("./icons/UserIcon")>;
    readonly arrow: () => Promise<typeof import("./icons/ArrowIcon")>;
    readonly arrowLeft: () => Promise<typeof import("./icons/ArrowLeftIcon")>;
    readonly geo: () => Promise<typeof import("./icons/GeoIcon")>;
    readonly logout: () => Promise<typeof import("./icons/LogoutIcon")>;
    readonly gear: () => Promise<typeof import("./icons/GearIcon")>;
    readonly brick: () => Promise<typeof import("./icons/BrickIcon")>;
    readonly plus: () => Promise<typeof import("./icons/PlusIcon")>;
    readonly loupe: () => Promise<typeof import("./icons/LoupeIcon")>;
    readonly delivery: () => Promise<typeof import("./icons/DeliveryIcon")>;
    readonly gift: () => Promise<typeof import("./icons/GiftIcon")>;
    readonly qr: () => Promise<typeof import("./icons/QRIcon")>;
    readonly trash: () => Promise<typeof import("./icons/TrashIcon")>;
    readonly vk: () => Promise<typeof import("./icons/VKIcon")>;
    readonly tg: () => Promise<typeof import("./icons/TGIcon")>;
    readonly vb: () => Promise<typeof import("./icons/VBIcon")>;
    readonly wa: () => Promise<typeof import("./icons/WAIcon")>;
};
export type IconProp = keyof typeof iconsImports;
export declare const icons: ("default" | "cant" | "edit" | "calendar" | "chevron" | "chevronUp" | "chevronLeft" | "chevronRight" | "cross" | "info" | "check" | "menu" | "user" | "arrow" | "arrowLeft" | "geo" | "logout" | "gear" | "brick" | "plus" | "loupe" | "delivery" | "gift" | "qr" | "trash" | "vk" | "tg" | "vb" | "wa")[];
export interface IconProps extends CustomIconProps {
    icon?: IconProp;
}
export declare function Icon({ icon, ...props }?: IconProps): Promise<any>;
export {};
