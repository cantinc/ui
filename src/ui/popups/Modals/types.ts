import { Style } from '@innet/dom'

import { FlexProps } from '../../layout'

export type HTMLModalElement = HTMLDivElement & { close: (result: string) => void }

export interface ModalsProps extends Style, FlexProps {

}
