import { Ref, style, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import { type State } from 'watch-state'

import { Spin, SpinProps } from '../Spin'
import styles from './AsyncSpin.scss'

const useStyle = style(styles)

export interface AsyncSpinProps extends SpinProps {
  delay?: number
  showDelay?: number
}

export function AsyncSpin ({
  delay = 300,
  showDelay = 0,
  style,
  ...props
}: AsyncSpinProps = {}) {
  const children = useChildren()
  const styles = useStyle()
  const hide = new Ref<State<boolean>>()
  const show = useShow(delay + showDelay)

  return (
    <delay ref={hide} show={showDelay} hide={delay}>
      <Spin
        {...props}
        style={{
          ...style,
          '--ui-spin-delay': `${delay}ms`,
        }}
        class={() => [
          styles.root,
          show.value && styles.show,
          hide.value?.value && styles.hide,
        ]}>
        {children}
      </Spin>
    </delay>
  )
}
