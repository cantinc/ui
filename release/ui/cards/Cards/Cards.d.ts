import { type FlexProps } from '../../layout';
export interface CardsProps extends FlexProps {
    timeout?: number;
}
export declare function Cards({ ref, timeout, ...props }?: CardsProps): Generator<any, void, unknown>;
