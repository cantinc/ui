import { Ref, StateProp, style, use, useHidden, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { onDestroy, State } from 'watch-state'

import { setOverflow } from '../../../utils'
import { Flex, FlexProps } from '../../layout'
import styles from './Popout.scss'

const useStyle = style(styles)

interface PopoutElementProps extends Omit<FlexProps, 'element'> {
  element: Ref<HTMLElement>
  contentStyle?: StateProp<string>
}

export interface PopoutProps extends PopoutElementProps {
  show?: StateProp<boolean>
}

let popoutCount = 0

function PopoutElement ({
  element,
  style = '',
  contentStyle,
  ...props
}: PopoutElementProps) {
  if (!element.value) return null

  const children = useChildren()
  const hide = useHidden()
  const preshow = useShow()
  const show = useShow(200)
  const styles = useStyle()

  const rect = element.value.getBoundingClientRect()
  const elementStyles = window.getComputedStyle(element.value)

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

  const newStyle = () => `--ui-popout-top:${rect.top}px;--ui-popout-left:${rect.left}px;--ui-popout-width:${rect.width}px;--ui-popout-height:${rect.height}px;--ui-popout-radius:${elementStyles.borderRadius};--ui-popout-border:${elementStyles.border};--ui-popout-background:${elementStyles.background};${use(style)}`

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
  ...props
}: PopoutProps) {
  const children = useChildren()
  const hide = new Ref<State<boolean>>()

  return (
    <show state={show}>
      <portal parent={document.body}>
        <delay ref={hide} hide={600}>
          <PopoutElement {...props}>
            {children}
          </PopoutElement>
        </delay>
      </portal>
    </show>
  )
}
