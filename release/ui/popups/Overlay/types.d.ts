import { Style } from '@innet/dom';
import { FlexProps } from '../../layout';
export declare type HTMLOverlayElement = HTMLDivElement & {
    close: (result: string) => void;
};
export interface OverlayProps extends Style, FlexProps {
}
