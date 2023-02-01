import { useChildren } from '@innet/jsx'

import { Overlay, type OverlayProps } from '../Overlay'

export interface DrawersProps extends OverlayProps {

}

export function Drawers (props: DrawersProps) {
  const children = useChildren()

  return (
    <Overlay {...props}>
      {children}
    </Overlay>
  )
}
