import { type HTMLStyleProps, inject, Ref, type StateProp, style } from '@innet/dom'
import { useSlots } from '@innet/jsx'
import { State } from 'watch-state'

import { actionProp } from '../../../utils'
import { Arrow } from '../../icons'
import styles from './Details.scss'

const useStyle = style(styles)

export interface DetailsProps extends HTMLStyleProps<HTMLDetailsElement> {
  onToggle?: (value: boolean) => void
  open?: StateProp<boolean>
}

export function * Details ({
  ref = new Ref<HTMLDetailsElement>(),
  style,
  open = new State(false),
  onToggle,
  ...props
}: DetailsProps = {}) {
  const { '': children, summary } = useSlots()
  const styles = useStyle()
  const height = new State(0)
  let defaultHeight = 0

  onToggle = actionProp(open, onToggle)

  yield (
    <details
      {...props}
      style={{
        ...style,
        height: inject(height, height => `${height}px`),
      }}
      ontoggle={(e: Event) => {
        if (ref.value?.open) {
          height.value = ref.value?.scrollHeight || 0
        }
        onToggle?.(ref.value?.open || false)
        ;(props as any).ontoggle?.(e)
      }}
      ref={ref}
      class={() => styles.root}>
      {summary && (
        <summary
          onclick={(e: MouseEvent) => {
            const element = ref.value
            if (element?.open) {
              e.preventDefault()
              height.value = defaultHeight
              setTimeout(() => {
                element.open = false
              }, 300)
            }
          }}
          class={() => styles.summary}>
          <Arrow
            class={() => styles.arrow}
            size={16}
            direction={() => height.value === defaultHeight ? 'right' : 'down'}
          />
          {summary}
        </summary>
      )}
      {children}
    </details>
  )

  defaultHeight = ref.value?.scrollHeight || 0
  height.value = defaultHeight
}
