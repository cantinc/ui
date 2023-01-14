import { StateProp } from '@innet/dom';
export type ActionProp<V> = (value: V) => void;
export declare function actionProp<V>(state?: StateProp<V>, action?: ActionProp<V>): ActionProp<V> | undefined;
