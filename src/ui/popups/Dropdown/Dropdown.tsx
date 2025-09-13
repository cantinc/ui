import { Ref, type StateProp, style, useHidden, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { onDestroy, State, unwatch } from 'watch-state'

import { Flex, type FlexProps } from '../../layout'
import styles from './Dropdown.scss'

const useStyle = style(styles)

export type DropdownPlacement = 'bottom' | 'top'

export interface DropdownProps extends Omit<FlexProps, 'element'> {
  element: Ref<HTMLElement>
  show: StateProp<boolean>
  placement?: DropdownPlacement
}

export function DropdownContent ({
  element,
  onclick,
  style,
  placement = 'bottom',
  ...props
}: Omit<DropdownProps, 'show' | 'onhide'>) {
  const children = useChildren()
  const hide = useHidden()
  const show = useShow()
  const styles = useStyle()

  const top = new State('')
  const rect = new State<DOMRect>()
  const verticalKey = placement === 'bottom' ? 'top' : 'bottom'

  const { documentElement } = document

  const updateTop = () => {
    const currentRect = element.value?.getBoundingClientRect()

    if (currentRect) {
      rect.value = currentRect
      top.value = placement === 'bottom'
        ? `${currentRect.top + currentRect.height + documentElement.scrollTop + 8}px`
        : `${documentElement.clientHeight - currentRect.top - documentElement.scrollTop + 8}px`
    }
  }

  const listener = () => {
    requestAnimationFrame(updateTop)
  }

  window.addEventListener('resize', listener)

  unwatch(updateTop)

  onDestroy(() => {
    window.removeEventListener('resize', listener)
  })

  return (
    <Flex
      {...props}
      onclick={(e: any) => {
        e.stopPropagation()
        ;(onclick as any)?.(e)
      }}
      style={{
        ...style,
        left: () => `${rect.value.left}px`,
        right: () => `calc(100% - ${rect.value.right}px)`,
        [verticalKey]: top,
      }}
      class={() => classes([
        styles.root,
        hide?.value && styles.hide,
        show?.value && styles.show,
      ])}>
      {children}
    </Flex>
  )
}

export function Dropdown ({
  show,
  ...props
}: DropdownProps) {
  const children = useChildren()
  const hide = new Ref<State<boolean>>()

  return (
    <show when={show}>
      <portal parent={document.body}>
        <delay ref={hide} hide={300}>
          <DropdownContent {...props}>
            {children}
          </DropdownContent>
        </delay>
      </portal>
    </show>
  )
}
