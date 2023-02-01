import { inject, Ref, style, useHidden, useShow } from '@innet/dom'
import { useChildren, useSlots } from '@innet/jsx'
import { State } from 'watch-state'

import { Flex, type FlexProps } from '../../layout'
import { Card, type CardProps } from '../Card'
import styles from './HoverCard.scss'

const useStyle = style(styles)

export interface HoverCardProps extends CardProps {

}

interface HoverCardContentProps extends CardProps {
  class: {
    card: any
    show: any
    hide: any
  }
}

function HoverCardContent ({
  class: styles,
  ...props
}: HoverCardContentProps) {
  const children = useChildren()
  const hide = useHidden()
  const show = useShow()

  return (
    <Card
      {...props}
      preventAnimation
      class={() => [
        styles.card,
        show.value && styles.show,
        hide?.value && styles.hide,
      ]}>
      {children}
    </Card>
  )
}

export function HoverCard ({
  padding = 18,
  width,
  style,
  ...props
}: HoverCardProps = {}) {
  const styles = useStyle()
  const { '': title, content } = useSlots()
  const open = new State(false)
  const hidden = new Ref<State<boolean>>()
  const isFine = matchMedia('(pointer:fine)').matches

  const hide = () => {
    open.value = false
  }
  const show = () => {
    open.value = true
  }
  const toggle = () => {
    open.value = !open.value
  }

  const actionProps: FlexProps<HTMLButtonElement> = isFine
    ? {
        onmouseenter: show,
        onmouseleave: hide,
        onkeydown: (e: KeyboardEvent) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault()

            toggle()
          }
        },
      }
    : {
        onclick: toggle,
        onmouseleave: hide,
      }

  return (
    <Flex
      {...props}
      padding={padding}
      class={() => styles.root}
      tabIndex={0}
      style={{
        '--ui-hover-card-width': inject(width, width => width === undefined ? '' : `${width}px`),
      }}
      {...actionProps}>
      {title}
      <show state={open}>
        <delay ref={hidden} hide={300}>
          <HoverCardContent
            {...props}
            padding={padding}
            class={styles as any}>
            {title}
            {content}
          </HoverCardContent>
        </delay>
      </show>
    </Flex>
  )
}
