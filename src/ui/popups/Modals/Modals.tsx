import { Ref, style } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Overlay, type OverlayProps } from '../Overlay'
import styles from './Modals.scss'

const useStyle = style(styles)

export interface ModalsProps extends OverlayProps {
  main?: boolean
}

export const modalsRef = new Ref<HTMLDivElement>()

export const ModalsPortal = () => {
  const children = useChildren()

  return modalsRef.value && (
    <portal parent={modalsRef.value}>
      {children}
    </portal>
  )
}

export function Modals ({
  main,
  ref,
  ...props
}: ModalsProps = {}) {
  const children = useChildren()
  const styles = useStyle()

  return (
    <Overlay
      ref={main ? modalsRef : ref}
      justify='center'
      align='center'
      {...props}
      class={() => styles.root}>
      {children}
    </Overlay>
  )
}
