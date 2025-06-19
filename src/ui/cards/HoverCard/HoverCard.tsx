import { Delay, inject, Ref, Show, style, use, useHidden, useShow } from '@innet/dom'
import { State } from 'watch-state'

import { Flex, type FlexProps } from '../../layout'
import { Card, type CardProps } from '../Card'
import styles from './HoverCard.scss'

const useStyle = style(styles)

export interface HoverCardProps extends CardProps {
  content?: JSX.Element
}

interface HoverCardContentProps extends Omit<CardProps, 'class'> {
  class: {
    card: any
    show: any
    hide: any
  }
}

function HoverCardContent ({
  class: styles,
  children,
  ...props
}: HoverCardContentProps) {
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
  vertical,
  reverse,
  children: title,
  content,
  ...props
}: HoverCardProps = {}) {
  const styles = useStyle()
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

  const actionProps: FlexProps<'button'> = isFine
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
      class={() => [
        styles.root,
        use(vertical) && use(reverse) && styles.verticalReverse,
      ]}
      tabIndex={0}
      style={{
        '--ui-hover-card-width': inject(width, width => width === undefined ? '' : `${width}px`),
      }}
      vertical={vertical}
      reverse={reverse}
      {...actionProps}>
      {title}
      <Show when={open}>
        <Delay ref={hidden} hide={300}>
          <HoverCardContent
            {...props}
            vertical={vertical}
            reverse={reverse}
            padding={padding}
            class={styles as any}>
            {title}
            {content}
          </HoverCardContent>
        </Delay>
      </Show>
    </Flex>
  )
}
