import { type StateProp } from '@innet/dom';
import { type JSXElement } from '@innet/jsx';
export interface MarkdownProps {
    text?: StateProp<string>;
}
export declare function Markdown({ text }: MarkdownProps): Partial<JSXElement<any, import("@innet/jsx").Props, import("@innet/jsx").Children>> | ((update: boolean) => Partial<JSXElement<any, import("@innet/jsx").Props, import("@innet/jsx").Children>> | undefined) | undefined;
