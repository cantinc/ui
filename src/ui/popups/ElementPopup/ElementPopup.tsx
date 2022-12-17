import { Ref, StateProp, style, use, useHidden, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { State } from 'watch-state'

import { Flex, FlexProps } from '../../layout'
import styles from './ElementPopup.scss'

const useStyle = style(styles)

export type PopupPlacement = 'bottom' | 'top'

export interface ElementPopupProps extends Omit<FlexProps, 'element'> {
  element: Ref<HTMLElement>
  show: StateProp<boolean>
  placement?: PopupPlacement
}

export function ElementPopupContent ({
  element,
  onclick,
  style = '',
  placement = 'bottom',
  ...props
}: Omit<ElementPopupProps, 'show' | 'onhide'>) {
  const children = useChildren()
  const hide = useHidden()
  const show = useShow()
  const styles = useStyle()

  const rect: any = element.value?.getBoundingClientRect()

  const { documentElement } = document
  const horizontal = `left:${rect.left}px;right:calc(100% - ${rect.right}px);`
  const vertical = placement === 'bottom'
    ? `top:${rect.top + rect.height + documentElement.scrollTop + 8}px;`
    : `bottom:${documentElement.clientHeight - rect.top - documentElement.scrollTop + 8}px;`

  const customStyle = () => `${vertical}${horizontal}${use(style) || ''}`

  return (
    <Flex
      {...props}
      onclick={(e: any) => {
        e.stopPropagation()
        ;(onclick as any)?.(e)
      }}
      style={customStyle}
      class={() => classes([
        styles.root,
        hide?.value && styles.hide,
        show?.value && styles.show,
      ])}>
      {children}
    </Flex>
  )
}

export function ElementPopup ({
  show,
  ...props
}: ElementPopupProps) {
  const children = useChildren()
  const hide = new Ref<State<boolean>>()

  return (
    <portal parent={document.body}>
      {() => use(show) && (
        <delay ref={hide} hide={300}>
          <ElementPopupContent {...props}>
            {children}
          </ElementPopupContent>
        </delay>
      )}
    </portal>
  )
}
