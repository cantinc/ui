import { HTMLStyleProps, Ref, style, use } from '@innet/dom'
import { useSlots } from '@innet/jsx'
import { State } from 'watch-state'

import styles from './Details.scss'

const useStyle = style(styles)

export interface DetailsProps extends HTMLStyleProps<HTMLDetailsElement> {

}

export function * Details ({
  ref = new Ref<HTMLDetailsElement>(),
  style = '',
  ...props
}: DetailsProps = {}) {
  const { '': children, summary } = useSlots()
  const styles = useStyle()
  const height = new State(0)
  let defaultHeight = 0

  yield (
    <details
      {...props}
      style={() => `height:${height.value}px;${use(style)}`}
      ontoggle={(e: Event) => {
        if (ref.value?.open) {
          height.value = ref.value?.scrollHeight || 0
        }

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
          }} class={() => styles.summary}>
          {summary}
        </summary>
      )}
      {children}
    </details>
  )

  defaultHeight = ref.value?.scrollHeight || 0
  height.value = defaultHeight
}
