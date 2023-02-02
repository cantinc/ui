import { type JSXElement } from '@innet/jsx';
import { type WatchProp } from 'src/types';
export interface MarkdownProps {
    text: WatchProp<string>;
}
export declare function Markdown({ text }: MarkdownProps): JSXElement<any, import("@innet/jsx").Props, import("@innet/jsx").Children> | ((update: boolean) => JSXElement<any, import("@innet/jsx").Props, import("@innet/jsx").Children> | undefined) | undefined;
