import { Ref } from '@innet/dom';
import { FlexProps } from '../../layout';
import { Slide } from '../Slides';
export interface Story extends Slide {
    preview: string;
    slides: string[];
    previewRef?: Ref<HTMLElement>;
}
export interface StoriesProps extends FlexProps {
    stories: Story[];
}
export declare function Stories({ stories, ref, ...props }: StoriesProps): any;
