import { Ref, StateProp, style, use, useHidden, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { onDestroy, State } from 'watch-state'

import { setOverflow } from '../../../utils'
import { Flex, FlexProps } from '../../layout'
import styles from './Cantent.scss'

const useStyle = style(styles)

interface CantentElementProps extends Omit<FlexProps, 'element'> {
  element: Ref<HTMLElement>
}

export interface CantentProps extends CantentElementProps {
  show?: StateProp<boolean>
}

let cantentCount = 0

function CantentElement ({
  element,
  style = '',
  ...props
}: CantentElementProps) {
  if (!element.value) return null

  const children = useChildren()
  const hide = useHidden()
  const show = useShow()
  const styles = useStyle()

  const rect = element.value.getBoundingClientRect()
  const elementStyles = window.getComputedStyle(element.value)

  if (!cantentCount) {
    setOverflow('hidden')
  }
  cantentCount++
  onDestroy(() => {
    cantentCount--

    if (!cantentCount) {
      setOverflow('')
    }
  })

  const newStyle = () => `--ui-cantent-top:${rect.top}px;--ui-cantent-left:${rect.left}px;--ui-cantent-width:${rect.width}px;--ui-cantent-height:${rect.height}px;--ui-cantent-radius:${elementStyles.borderRadius};--ui-cantent-border:${elementStyles.border};--ui-cantent-background:${elementStyles.background};${use(style)}`

  return (
    <div
      style={newStyle}
      class={() => classes([
        styles.root,
        show.value && styles.show,
        hide?.value && styles.hide,
      ])}>
      <Flex
        {...props}
        class={() => styles.content}>
        {children}
      </Flex>
    </div>
  )
}

export function Cantent ({
  show,
  ...props
}: CantentProps) {
  const children = useChildren()
  const hide = new Ref<State<boolean>>()

  return (
    <show state={show}>
      <portal parent={document.body}>
        <delay ref={hide} hide={300}>
          <CantentElement {...props}>
            {children}
          </CantentElement>
        </delay>
      </portal>
    </show>
  )
}
