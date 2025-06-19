import { Delay, type StateProp, style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { Cache } from 'watch-state'

import { Flex, type FlexProps } from '../Flex'
import { Spin } from '../Spin'
import styles from './SpinBox.scss'

const useStyle = style(styles)

export interface SpinBoxProps extends FlexProps {
  loading: StateProp<boolean>
}

export function SpinBox ({
  loading,
  ...props
}: SpinBoxProps) {
  const children = useChildren()
  const styles = useStyle()
  const loadingCache = new Cache(() => use(loading))

  const spinner = (
    <Delay show={300} hide={300}>
      <Spin align='center' justify='center' class={styles.spin} />
    </Delay>
  )

  return (
    <Flex
      {...props}
      class={() => [
        styles.root,
        loadingCache.value && styles.loading,
      ]}>
      {children}
      {() => loadingCache.value && spinner}
    </Flex>
  )
}
