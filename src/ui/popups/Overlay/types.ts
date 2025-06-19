import { type FlexProps } from '../../layout'

export type HTMLOverlayElement = HTMLDivElement & { close: (result: string) => void }

export interface OverlayProps extends FlexProps {

}
