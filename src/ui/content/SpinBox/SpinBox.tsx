import { style } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { Cache } from 'watch-state'

import { Flex, FlexProps } from '../../layout'
import { Spin } from '../Spin'
import styles from './SpinBox.scss'

const useStyle = style(styles)

export interface SpinBoxProps extends Exclude<FlexProps, 'vertical'> {
  loading: () => boolean
  horizontal?: boolean
}

export function SpinBox ({
  loading,
  horizontal,
  ...props
}: SpinBoxProps) {
  const children = useChildren()
  const styles = useStyle()
  const loadingCache = new Cache(loading)

  const spinner = (
    <delay show={300} hide={300}>
      <Spin align='center' justify='center' class={styles.spin} />
    </delay>
  )

  return (
    <Flex
      {...props}
      vertical={!horizontal}
      class={() => [
        styles.root,
        loadingCache.value && styles.loading,
      ]}>
      {children}
      {() => loadingCache.value && spinner}
    </Flex>
  )
}
