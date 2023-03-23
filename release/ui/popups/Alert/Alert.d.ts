import { type FlexProps } from '../../layout';
export interface AlertProps extends FlexProps {
    view?: 'success' | 'warning' | 'error';
}
export declare function Alert({ view, ...props }?: AlertProps): any;
