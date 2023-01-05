import { HTMLStyleProp, Ref, StateProp, style, useHidden, useShow } from '@innet/dom'
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
  contentStyle?: HTMLStyleProp
  onhide: () => void
  rootRef?: Ref<HTMLDivElement>
}

export interface PopoutProps extends Omit<PopoutElementProps, 'onhide'> {
  show?: StateProp<any>
  onhide?: () => void
}

let popoutCount = 0

function PopoutElement ({
  element,
  style,
  contentStyle,
  onhide,
  rootRef = new Ref(),
  ...props
}: PopoutElementProps) {
  if (!element.value) return null

  const children = useChildren()
  const hide = useHidden()
  const preshow = useShow()
  const show = useShow(200)
  const styles = useStyle()
  let touchStart: number
  let touchStartX: number
  const touched = new State(false)
  const touchHide = new State(0)

  useEscapeListener(onhide)

  const elementData = new State<{
    rect: DOMRect
    styles: CSSStyleDeclaration
  }>({
    rect: element.value.getBoundingClientRect(),
    styles: window.getComputedStyle(element.value),
  })

  if (hide) {
    new Watch(() => {
      if (element.value && hide.value) {
        elementData.value = {
          rect: element.value.getBoundingClientRect(),
          styles: window.getComputedStyle(element.value),
        }
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

  return (
    <div
      ref={rootRef}
      style={{
        ...style,
        '--ui-popout-top': () => `${elementData.value.rect.top}px`,
        '--ui-popout-left': () => `${elementData.value.rect.left}px`,
        '--ui-popout-width': () => `${elementData.value.rect.width}px`,
        '--ui-popout-height': () => `${elementData.value.rect.height}px`,
        '--ui-popout-radius': () => `${elementData.value.styles.borderRadius}`,
        '--ui-popout-border': () => `${elementData.value.styles.border}`,
        '--ui-popout-touch-hide': () => `${touchHide.value}px`,
        '--ui-popout-background': () => `${elementData.value.styles.background}`,
      }}
      ontouchstart={(e: TouchEvent) => {
        touchStart = e.touches[0].clientY
        touchStartX = e.touches[0].clientX
        touched.value = true
      }}
      ontouchmove={(e: TouchEvent) => {
        if (!touched.value) return

        const newTouchHide = e.touches[0].clientY - touchStart
        const newTouchStartX = Math.abs(e.touches[0].clientX - touchStartX)

        if (newTouchStartX > newTouchHide) {
          touched.value = false
          touchHide.value = 0
          return
        }

        if (newTouchHide > 100) {
          touched.value = false
          onhide()
        } else {
          touchHide.value = e.touches[0].clientY - touchStart
        }
      }}
      ontouchend={() => {
        touched.value = false
        touchHide.value = 0
      }}
      class={() => classes([
        styles.root,
        preshow.value && styles.preshow,
        show.value && styles.show,
        hide?.value && styles.hide,
        touched.value && styles.touch,
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
