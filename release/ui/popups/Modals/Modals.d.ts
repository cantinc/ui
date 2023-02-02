import { Ref } from '@innet/dom';
import { type OverlayProps } from '../Overlay';
export interface ModalsProps extends OverlayProps {
    main?: boolean;
}
export declare const modalsRef: Ref<HTMLElement>;
export declare const ModalsPortal: () => any;
export declare function Modals({ main, ref, ...props }?: ModalsProps): any;
