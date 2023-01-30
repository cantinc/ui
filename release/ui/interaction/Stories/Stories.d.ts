import { Ref } from '@innet/dom';
import { FlexProps, ImageProps } from '../../layout';
import { Slide } from '../Slides';
export interface Story extends Slide {
    preview: string;
    slides: string[];
    previewRef?: Ref<HTMLElement>;
}
export interface StoriesProps extends FlexProps {
    stories: Story[];
    props?: {
        preview?: ImageProps;
    };
}
export declare function Stories({ stories, ref, props: { preview: previewProps }, ...props }: StoriesProps): any;
