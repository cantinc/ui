import { SpinProps } from '../../layout/Spin';
export interface AsyncSpinProps extends SpinProps {
    hide?: number;
    show?: number;
}
export declare function AsyncSpin({ hide, show, ...props }?: AsyncSpinProps): any;
