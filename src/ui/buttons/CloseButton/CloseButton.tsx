import { inject, type StateProp, style, useHidden, useShow } from '@innet/dom'
import { type Merge } from 'src/types'

import { Icon, type IconProp } from '../../icons'
import { Flex, type FlexProps, type FlexStyles } from '../../layout'
import styles from './CloseButton.scss'

const useStyle = style(styles)

export type CloseButtonPlacement = 'topLeft' | 'top' | 'topRight' | 'right' | 'bottomRight' | 'bottom' | 'bottomLeft' | 'left'

export type CloseButtonProps<S extends FlexStyles = FlexStyles> = Merge<FlexProps<'button', S>, {
  placement?: CloseButtonPlacement
  icon?: IconProp
  size?: StateProp<number>
  offset?: StateProp<number>
}>

export function CloseButton ({
  placement = 'topRight',
  icon = 'cross',
  offset = 24,
  size = 18,
  style,
  ...props
}: CloseButtonProps = {}) {
  const styles = useStyle()
  const show = useShow()
  const hide = useHidden()

  return (
    <Flex
      type='button'
      element='button'
      padding={14}
      {...props}
      style={{
        ...style,
        '--ui-close-button-offset': inject(offset, offset => `${offset}px`),
      }}
      class={() => [
        styles.root,
        show.value && styles.show,
        hide?.value && styles.hide,
        styles[placement],
      ]}>
      <Icon
        size={size}
        icon={icon}
      />
    </Flex>
  )
}
