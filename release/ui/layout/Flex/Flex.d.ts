import { type HTMLStyleProps, type StateProp } from '@innet/dom';
export declare const alignJustifyMap: {
    readonly start: "flex-start";
    readonly end: "flex-end";
    readonly center: "center";
    readonly stretch: "stretch";
};
export declare const alignMap: {
    readonly baseline: "baseline";
    readonly start: "flex-start";
    readonly end: "flex-end";
    readonly center: "center";
    readonly stretch: "stretch";
};
export declare const justifyMap: {
    readonly between: "space-between";
    readonly around: "space-around";
    readonly baseline: "baseline";
    readonly start: "flex-start";
    readonly end: "flex-end";
    readonly center: "center";
    readonly stretch: "stretch";
};
export type FlexProps<E extends HTMLElement = HTMLElement, R = {}, S = any> = Omit<HTMLStyleProps<E, S>, keyof R | 'children'> & {
    vertical?: StateProp<boolean>;
    loading?: StateProp<boolean>;
    loadingOffset?: StateProp<number>;
    align?: keyof typeof alignMap;
    justify?: keyof typeof justifyMap;
    gap?: number | [number, number];
    flex?: number | boolean;
    wrap?: boolean;
    inline?: boolean;
    reverse?: boolean;
    element?: string;
    padding?: number | [number, number] | [number, number, number] | [number, number, number, number];
} & R;
export declare function Flex<E extends HTMLElement = HTMLElement>({ vertical, align, justify, gap, flex, wrap, inline, reverse, style, padding, element: Element, loading, loadingOffset, ...props }?: FlexProps<E>): any;
