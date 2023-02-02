import { type StateProp } from '@innet/dom';
import { type FlexProps } from '../Flex';
export interface BadgeFooterProps extends FlexProps {
    offset?: StateProp<number>;
}
export declare function BadgeFooter({ offset, ...props }?: BadgeFooterProps): any;
