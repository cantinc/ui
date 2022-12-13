import { Ref, style, use, useShow } from '@innet/dom'
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
  size = 320,
  placement = 'left',
  style = '',
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

  const styleHandler = () => {
    const right = placement === 'right' ? '--ui-drawer-right:0;' : ''
    const bottom = placement === 'bottom' ? '--ui-drawer-bottom:0;' : ''
    const sizeStyle = `--ui-drawer-${['left', 'right'].includes(placement) ? 'width' : 'height'}:${size}px;`
    const transformStyle = `--ui-drawer-transform:translate(${transformPlacements[placement]});`
    return `${right}${bottom}${transformStyle}${sizeStyle}${use(style)}`
  }

  // @ts-expect-error
  props._close = () => onclose

  return (
    <delay ref={hide} hide={300}>
      <Flex
        {...props}
        style={styleHandler}
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
