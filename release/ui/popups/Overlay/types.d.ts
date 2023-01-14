import { Style } from '@innet/dom';
import { FlexProps } from '../../layout';
export type HTMLOverlayElement = HTMLDivElement & {
    close: (result: string) => void;
};
export interface OverlayProps extends Style, FlexProps {
}
