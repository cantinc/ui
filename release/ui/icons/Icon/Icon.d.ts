import { HTMLStyleProps, StateProp } from '@innet/dom';
export declare const iconsValues: {
    readonly cant: "\\e806";
    readonly cross: "\\e808";
    readonly edit: "\\e801";
    readonly gear: "\\e809";
    readonly gift: "\\e818";
    readonly location: "\\e800";
    readonly logout: "\\e803";
    readonly loupe: "\\e810";
    readonly menu: "\\e80c";
    readonly minus: "\\e805";
    readonly plus: "\\e80f";
    readonly tg: "\\e804";
    readonly truck: "\\e819";
    readonly user: "\\e80d";
    readonly viber: "\\e80a";
    readonly vk: "\\e807";
    readonly whatsapp: "\\e802";
};
export declare type Icons = keyof typeof iconsValues;
export declare const icons: Icons[];
export interface IconProps extends HTMLStyleProps<HTMLSpanElement> {
    icon: Icons;
    size?: StateProp<number>;
    color?: StateProp<string>;
    end?: boolean;
}
export declare function Icon({ icon, style, size, color, end, ...props }: IconProps): any;
