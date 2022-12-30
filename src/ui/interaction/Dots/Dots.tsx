import { StateProp, style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { State, unwatch, Watch } from 'watch-state'

import { actionProp } from '../../../utils'
import { Flex, FlexProps } from '../../layout'
import styles from './Dots.scss'

const useStyle = style(styles)

export interface DotsProps extends Omit<FlexProps<HTMLDivElement>, 'onchange'> {
  count: number
  size?: StateProp<number>
  autoscroll?: number | boolean
  progress?: boolean
  value?: StateProp<number>
  onchange?: (value: number) => void
}

export function Dots ({
  ref,
  count,
  autoscroll,
  style = '',
  size = 12,
  progress,
  value = new State(0),
  onchange,
  ...props
}: DotsProps) {
  const styles = useStyle()
  const children = useChildren()

  onchange = actionProp(value, onchange)

  let timer: any
  let fix = false
  const transition = new State(0.3)
  const pseudoValue = new State()

  new Watch(() => {
    const currentValue = use(value)

    // because of browsers bug (dynamic changes of transition has not an effect)
    if (autoscroll && !fix && unwatch(() => pseudoValue.value) === currentValue) {
      pseudoValue.value = currentValue - 1
      setTimeout(() => {
        pseudoValue.value = currentValue
      })
      return
    }
    pseudoValue.value = use(value)
  })

  if (autoscroll) {
    new Watch(() => {
      fix = false
      clearTimeout(timer)

      const currentValue = use(value)

      if (autoscroll) {
        transition.value = 0.3

        timer = setTimeout(() => {
          const newTransition = autoscroll === true ? 20000 : autoscroll
          transition.value = newTransition / 1000
          const nextValue = currentValue + 1
          pseudoValue.value = nextValue

          timer = setTimeout(() => {
            fix = true
            onchange?.(nextValue === count ? 0 : nextValue)
          }, newTransition)
        }, 1000)
      }
    })
  }

  const rootStyle = () => {
    const currentValue = autoscroll ? pseudoValue.value : pseudoValue.value + 1
    const progressStyles = `--ui-dots-progress:${currentValue / count};`
    const sizeStyles = `--ui-dots-size:${use(size)}px;`
    const transitionStyles = `--ui-dots-transition:${transition.value}s;`
    const leftStyles = progress ? '--ui-dots-left:0;' : `--ui-dots-left:calc(100% * (var(--ui-dots-progress) - ${1 / count}));`

    return `${progressStyles}${sizeStyles}${leftStyles}${transitionStyles}${use(style)}`
  }

  const array = [...new Array(count)].map((_, i) => i)

  return (
    <Flex
      gap={8}
      {...props}
      ref={ref}
      style={rootStyle}
      class={() => styles.root}>
      {array.map(i => (
        <div
          class={() => classes([
            styles.dot,
            use(value) === i && styles.active,
          ])}
          onclick={() => onchange?.(i)}>
          {children?.[0](i)}
        </div>
      ))}
      <Flex
        gap={8}
        {...props}
        class={() => styles.progress}>
        {array.map(i => (
          <div class={() => styles.dotProgress}>
            {children?.[0](i)}
          </div>
        ))}
      </Flex>
    </Flex>
  )
}
