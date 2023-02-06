import { Ref, type StateProp } from '@innet/dom';
import { type FlexProps, type ImageProps } from '../../layout';
import { type Slide } from '../Slides';
export interface Story extends Slide {
    preview: string;
    slides: string[];
    previewRef?: Ref<HTMLElement>;
    unread?: StateProp<boolean>;
    onread?: () => void;
}
export interface StoriesProps extends FlexProps {
    stories: Story[];
    props?: {
        preview?: ImageProps;
    };
}
export declare function Stories({ stories, ref, props: { preview: previewProps }, ...props }: StoriesProps): any;
