import { Style } from '@innet/dom'

import { FlexProps } from '../../position'

export type HTMLModalElement = HTMLDivElement & { close: (result: string) => void }

export interface ModalsProps extends Style, FlexProps {

}
