import { style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Overlay, OverlayProps } from '../Overlay'
import styles from './Modals.scss'

const useStyle = style(styles)

export interface ModalsProps extends OverlayProps {

}

export function Modals (props: ModalsProps) {
  const children = useChildren()
  const styles = useStyle()

  return (
    <Overlay
      justify='center'
      align='center'
      {...props}
      class={() => styles.root}>
      {children}
    </Overlay>
  )
}
