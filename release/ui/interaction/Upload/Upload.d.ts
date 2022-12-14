import { HTMLProps, HTMLStyleProps, StateProp } from '@innet/dom';
export interface UploadValue {
    src: string;
    file?: File;
}
export interface UploadProps extends Omit<HTMLStyleProps<HTMLInputElement>, 'files' | 'onchange'> {
    width?: StateProp<number>;
    height?: StateProp<number>;
    radius?: StateProp<number>;
    label?: StateProp<string>;
    dragText?: StateProp<string>;
    dropText?: StateProp<string>;
    error?: StateProp<boolean>;
    hint?: StateProp<any>;
    files?: StateProp<UploadValue[]>;
    onchange?: (files: UploadValue[]) => void;
    props?: {
        hint?: HTMLProps<HTMLSpanElement>;
    };
}
export declare function Upload({ width, height, radius, label, dragText, dropText, error, hint, style, props, multiple, ref, files, onchange, ...rest }?: UploadProps): any;
