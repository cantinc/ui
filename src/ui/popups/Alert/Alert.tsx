import { style, useHidden, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'

import { Flex, type FlexProps } from '../../layout'
import styles from './Alert.scss'

const useStyle = style(styles)

export interface AlertProps extends FlexProps {
  view?: 'success' | 'warning' | 'error'
}

export function Alert ({
  view = 'warning',
  ...props
}: AlertProps = {}) {
  const children = useChildren()
  const hide = useHidden()
  const show = useShow()
  const styles = useStyle()

  return (
    <Flex
      padding={24}
      align='center'
      justify='center'
      {...props}
      class={() => [
        styles.root,
        show.value && styles.show,
        hide?.value && styles.hide,
        styles[view],
      ]}>
      {children}
    </Flex>
  )
}
