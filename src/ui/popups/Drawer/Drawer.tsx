import { Ref, style, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { onDestroy, State } from 'watch-state'

import { setOverflow } from '../../../utils'
import { Flex, FlexProps } from '../../layout'
import styles from './Drawer.scss'

const useStyle = style(styles)

export type DrawerPlacement = 'left' | 'top' | 'right' | 'bottom'

export interface DrawerProps extends Omit<FlexProps, 'onclose'> {
  size?: number
  placement?: DrawerPlacement
  onclose?: (result: string) => void
}

let drawersCount = 0

const transformPlacements: Record<DrawerPlacement, string> = {
  left: '-30%, 0',
  top: '0, -30%',
  right: '30%, 0',
  bottom: '0, 30%',
}

export function Drawer ({
  onclose,
  size = 388,
  placement = 'left',
  style,
  ...props
}: DrawerProps = {}) {
  const children = useChildren()
  const styles = useStyle()
  const show = useShow()
  const hide = new Ref<State<boolean>>()

  if (!drawersCount) {
    setOverflow('hidden')
  }
  drawersCount++
  onDestroy(() => {
    drawersCount--

    if (!drawersCount) {
      setOverflow('')
    }
  })

  // @ts-expect-error
  props._close = () => onclose

  return (
    <delay ref={hide} hide={300}>
      <Flex
        {...props}
        style={{
          ...style,
          '--ui-drawer-right': placement === 'right' ? '0' : '',
          '--ui-drawer-bottom': placement === 'bottom' ? '0' : '',
          '--ui-drawer-width': ['left', 'right'].includes(placement) ? `${size}px` : '',
          '--ui-drawer-height': ['top', 'bottom'].includes(placement) ? `${size}px` : '',
          '--ui-drawer-transform': `translate(${transformPlacements[placement]})`,
        }}
        class={() => [
          styles.root,
          show.value && styles.show,
          hide.value?.value && styles.hide,
        ]}>
        {children}
      </Flex>
    </delay>
  )
}
