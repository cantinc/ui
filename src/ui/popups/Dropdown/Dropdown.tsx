import { Ref, type StateProp, style, useHidden, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { type State } from 'watch-state'

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

  const rect: any = element.value?.getBoundingClientRect()

  const { documentElement } = document

  const verticalKey = placement === 'bottom' ? 'top' : 'bottom'
  const verticalValue = placement === 'bottom'
    ? `${rect.top + rect.height + documentElement.scrollTop + 8}px`
    : `${documentElement.clientHeight - rect.top - documentElement.scrollTop + 8}px`

  return (
    <Flex
      {...props}
      onclick={(e: any) => {
        e.stopPropagation()
        ;(onclick as any)?.(e)
      }}
      style={{
        ...style,
        left: `${rect.left}px`,
        right: `calc(100% - ${rect.right}px)`,
        [verticalKey]: verticalValue,
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
    <show state={show}>
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
