import { type HTMLProps, Ref, type StateProp } from '@innet/dom';
import { type FlexProps } from '../../layout';
export interface UploadFile extends Partial<File> {
    src: string;
    name: string;
}
export interface UploadProps extends Omit<FlexProps<HTMLLabelElement>, 'files' | 'onchange'> {
    inputRef?: Ref<HTMLInputElement>;
    accept?: StateProp<string>;
    name?: StateProp<string>;
    disabled?: StateProp<boolean>;
    width?: StateProp<number | string>;
    height?: StateProp<number>;
    radius?: StateProp<number>;
    label?: StateProp<string>;
    error?: StateProp<boolean>;
    hint?: StateProp<any>;
    multiple?: StateProp<boolean>;
    clearable?: StateProp<boolean>;
    files?: StateProp<UploadFile[]>;
    onchange?: (files: UploadFile[]) => void;
    props?: {
        hint?: HTMLProps<HTMLSpanElement>;
        input?: HTMLProps<HTMLInputElement>;
    };
}
export declare function Upload({ width, height, radius, label, error, hint, style, props, multiple, inputRef, files, onchange, accept, name, disabled, clearable, ...rest }?: UploadProps): any;
