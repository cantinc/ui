import { StateProp, style, use } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { onDestroy, State, unwatch, Watch } from 'watch-state'

import { actionProp } from '../../../utils'
import { Flex, FlexProps } from '../../layout'
import styles from './Dots.scss'

const useStyle = style(styles)

export interface DotsProps extends Omit<FlexProps<HTMLDivElement>, 'onchange'> {
  count: number
  size?: StateProp<number>
  autoscroll?: StateProp<number | boolean>
  progress?: boolean
  value?: StateProp<number>
  onchange?: (value: number) => void
  onend?: () => void
  circular?: boolean
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
  onend,
  circular,
  ...props
}: DotsProps) {
  const styles = useStyle()
  const children = useChildren()

  onchange = actionProp(value, onchange)

  let timer: any
  let fix = false
  const transition = new State(0.3)
  const pseudoValue = new State()
  const nextValue = new State(0)

  new Watch(() => {
    const currentValue = use(value)

    // because of browsers bug (dynamic changes of transition has not an effect)
    if (use(autoscroll) && !fix && unwatch(() => pseudoValue.value) === currentValue) {
      pseudoValue.value = currentValue - 1
      setTimeout(() => {
        pseudoValue.value = currentValue
      })
      return
    }

    pseudoValue.value = currentValue
  })

  new Watch(() => {
    const currentAutoscroll = use(autoscroll)

    if (currentAutoscroll) {
      new Watch(() => {
        fix = false
        clearTimeout(timer)

        const currentValue = use(value)

        transition.value = 0.3
        nextValue.value = currentValue + 1

        timer = setTimeout(() => {
          const newTransition: number = currentAutoscroll === true ? 10000 : currentAutoscroll
          transition.value = newTransition / 1000
          const newValue = nextValue.value
          pseudoValue.value = newValue

          timer = setTimeout(() => {
            fix = true
            if (newValue === count) {
              onend?.()
              if (circular) {
                onchange?.(0)
              }
            } else {
              onchange?.(newValue)
            }
          }, newTransition)
        }, 1000)
      })
    } else {
      clearTimeout(timer)
    }
  })

  onDestroy(() => clearTimeout(timer))

  const rootStyle = () => {
    const currentValue = use(autoscroll) ? pseudoValue.value : pseudoValue.value + 1
    const progressStyles = `--ui-dots-progress:${currentValue / count};`
    const sizeStyles = `--ui-dots-size:${use(size)}px;`
    const transitionStyles = `--ui-dots-transition:${transition.value}s;`
    const leftStyles = progress ? '--ui-dots-left:0;' : `--ui-dots-left:calc(100% * ${((use(autoscroll) ? nextValue.value : currentValue) / count) - (1 / count)});`

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
