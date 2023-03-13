import { inject, type StateProp, style } from '@innet/dom'

import { Icon, type IconProp } from '../../icons'
import { Flex, type FlexProps } from '../../layout'
import styles from './CloseButton.scss'

const useStyle = style(styles)

export type CloseButtonPlacement = 'topLeft' | 'top' | 'topRight' | 'right' | 'bottomRight' | 'bottom' | 'bottomLeft' | 'left'

export type CloseButtonProps<R = {}, S = any> = FlexProps<HTMLButtonElement, R & {
  placement?: CloseButtonPlacement
  icon?: IconProp
  size?: StateProp<number>
  offset?: StateProp<number>
}, S>

export function CloseButton ({
  placement = 'topRight',
  icon = 'cross',
  offset = 24,
  size = 18,
  style,
  ...props
}: CloseButtonProps = {}) {
  const styles = useStyle()

  return (
    <Flex<HTMLButtonElement>
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
        styles[placement],
      ]}>
      <Icon
        size={size}
        icon={icon}
      />
    </Flex>
  )
}
