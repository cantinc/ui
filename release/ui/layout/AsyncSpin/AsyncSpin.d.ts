import { SpinProps } from '../Spin';
export interface AsyncSpinProps extends SpinProps {
    delay?: number;
    showDelay?: number;
}
export declare function AsyncSpin({ delay, showDelay, style, ...props }?: AsyncSpinProps): any;
