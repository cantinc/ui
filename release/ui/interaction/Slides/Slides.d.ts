import { StateProp } from '@innet/dom';
import { FlexProps } from '../../layout';
export declare type Slide<E extends HTMLElement = HTMLElement> = FlexProps<E, {
    children?: any;
}>;
export interface SlidesProps extends Omit<FlexProps, 'onchange'> {
    slides: Slide[];
    value?: StateProp<number>;
    slideProps?: Slide;
    onchange?: (value: number) => void;
}
export declare function Slides({ slides, vertical, value, onchange, ref, onscroll, slideProps, ...props }: SlidesProps): Generator<any, void, unknown>;
