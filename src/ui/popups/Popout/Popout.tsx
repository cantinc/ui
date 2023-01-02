import { Ref, StateProp, style, use, useHidden, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { onDestroy, State, Watch } from 'watch-state'

import { useEscapeListener } from '../../../hooks'
import { actionProp, setOverflow } from '../../../utils'
import { Flex, FlexProps } from '../../layout'
import styles from './Popout.scss'

const useStyle = style(styles)

interface PopoutElementProps extends Omit<FlexProps, 'element'> {
  element: Ref<HTMLElement>
  contentStyle?: StateProp<string>
  onhide: () => void
}

export interface PopoutProps extends Omit<PopoutElementProps, 'onhide'> {
  show?: StateProp<any>
  onhide?: () => void
}

let popoutCount = 0

function PopoutElement ({
  element,
  style = '',
  contentStyle,
  onhide,
  ...props
}: PopoutElementProps) {
  if (!element.value) return null

  const children = useChildren()
  const hide = useHidden()
  const preshow = useShow()
  const show = useShow(200)
  const styles = useStyle()

  useEscapeListener(onhide)

  const rect = new State(element.value.getBoundingClientRect())
  const elementStyles = new State(window.getComputedStyle(element.value))

  if (hide) {
    new Watch(() => {
      if (hide.value && element.value) {
        rect.value = element.value.getBoundingClientRect()
        elementStyles.value = window.getComputedStyle(element.value)
      }
    })
  }

  if (!popoutCount) {
    setOverflow('hidden')
  }
  popoutCount++
  onDestroy(() => {
    popoutCount--

    if (!popoutCount) {
      setOverflow('')
    }
  })

  const newStyle = () => {
    const { top, left, height, width } = rect.value
    const { borderRadius, border, background } = elementStyles.value
    return `--ui-popout-top:${top}px;--ui-popout-left:${left}px;--ui-popout-width:${width}px;--ui-popout-height:${height}px;--ui-popout-radius:${borderRadius};--ui-popout-border:${border};--ui-popout-background:${background};${use(style)}`
  }

  return (
    <div
      style={newStyle}
      class={() => classes([
        styles.root,
        preshow.value && styles.preshow,
        show.value && styles.show,
        hide?.value && styles.hide,
      ])}>
      <Flex
        {...props}
        style={contentStyle}
        class={() => styles.content}>
        {children}
      </Flex>
    </div>
  )
}

export function Popout ({
  show = true,
  onhide,
  ...props
}: PopoutProps) {
  const children = useChildren()
  const hide = new Ref<State<boolean>>()

  const setHide = actionProp(show, onhide)

  return (
    <show state={show}>
      <portal parent={document.body}>
        <delay ref={hide} hide={600}>
          <PopoutElement onhide={() => setHide?.(false)} {...props}>
            {children}
          </PopoutElement>
        </delay>
      </portal>
    </show>
  )
}
