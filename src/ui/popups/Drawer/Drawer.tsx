import { Ref, style, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { onDestroy, type State } from 'watch-state'

import { type TouchHidePlacement, useTouchHide } from '../../../hooks'
import { setOverflow } from '../../../utils'
import { CloseButton, type CloseButtonPlacement } from '../../buttons'
import { type IconProp } from '../../icons'
import { Flex, type FlexProps } from '../../layout'
import styles from './Drawer.scss'

const useStyle = style(styles)

export interface DrawerProps extends Omit<FlexProps, 'onclose'> {
  size?: number
  placement?: TouchHidePlacement
  closeButtonPlacement?: CloseButtonPlacement
  closeIcon?: IconProp
  onclose?: (result: string) => void
}

let drawersCount = 0

export function Drawer ({
  onclose,
  size = 388,
  placement = 'left',
  closeButtonPlacement,
  closeIcon,
  style,
  ref = new Ref(),
  ...props
}: DrawerProps = {}) {
  const children = useChildren()
  const styles = useStyle()
  const show = useShow()
  const hide = new Ref<State<boolean>>()
  const { touched, touchHide, handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchHide({
    hide: () => onclose?.('touch'),
    placement,
    element: ref,
  })

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

  const overlayHack: any = {
    _close: () => onclose,
  }

  return (
    <delay ref={hide} hide={300}>
      <div
        {...overlayHack}
        ontouchstart={handleTouchStart}
        ontouchmove={handleTouchMove}
        ontouchend={handleTouchEnd}
        style={{
          ...style,
          '--ui-drawer-size': `${size}px`,
          '--ui-drawer-touch-hide': () => `${touchHide.value}`,
        }}
        class={() => classes([
          styles.root,
          show.value && styles.show,
          styles[placement],
          touched.value && styles.touch,
          hide.value?.value && styles.hide,
        ])}>
        <Flex
          {...props}
          ref={ref}
          class={() => styles.content}>
          {children}
        </Flex>
        <CloseButton
          icon={closeIcon}
          placement={closeButtonPlacement}
          onclick={() => onclose?.('close')}
        />
      </div>
    </delay>
  )
}
