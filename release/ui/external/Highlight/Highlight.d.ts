import { type HTMLProps } from '@innet/dom';
export interface HighlightProps extends HTMLProps<HTMLPreElement> {
    code: string;
    language: string;
}
export declare function Highlight({ ref, code, language, ...props }: HighlightProps): Generator<any, void, unknown>;
