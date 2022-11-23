import { style, useHidden, useShow } from '@innet/dom'

import { Flex, FlexProps } from '../../position'
import styles from './Spin.scss'

const useStyle = style(styles)

export interface SpinProps extends FlexProps {

}

export function Spin (props: SpinProps) {
  const styles = useStyle()
  const show = useShow()
  const hide = useHidden()

  return (
    <Flex
      gap={8}
      {...props}
      class={() => [
        styles.root,
        show.value && styles.show,
        hide?.value && styles.hide,
      ]}>
      <div class={styles.point} />
      <div class={styles.point} />
      <div class={styles.point} />
    </Flex>
  )
}
