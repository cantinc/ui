import { type HTMLStyleProp, Ref, type StateProp, style, use, useHidden, useShow } from '@innet/dom'
import { useChildren } from '@innet/jsx'
import classes from 'html-classes'
import { State, Watch } from 'watch-state'

import { useEscapeListener, usePopup, useTouchHide } from '../../../hooks'
import { actionProp } from '../../../utils'
import { CloseButton, type CloseButtonProps } from '../../buttons'
import { Flex, type FlexProps } from '../../layout'
import styles from './Popout.scss'

const useStyle = style(styles)

interface PopoutElementProps extends Omit<FlexProps, 'element'> {
  element?: Ref<HTMLElement>
  contentStyle?: HTMLStyleProp
  onhide: () => void
  rootRef?: Ref<HTMLDivElement>
  background?: StateProp<string>
  closeButton?: CloseButtonProps | boolean
}

export interface PopoutProps extends Omit<PopoutElementProps, 'onhide'> {
  show?: StateProp<any>
  background?: StateProp<string>
  onhide?: () => void
  closeButton?: CloseButtonProps | boolean
}

export interface PopoutElementData {
  rect: DOMRect
  styles: CSSStyleDeclaration
}

const createStyles = () => {
  const styles = document.createElement('span').style
  styles.setProperty('border-radius', '20px')

  return styles
}

function PopoutElement ({
  element,
  style,
  contentStyle,
  onhide,
  rootRef = new Ref(),
  ref = new Ref(),
  background,
  closeButton,
  ...props
}: PopoutElementProps) {
  const children = useChildren()
  const hide = useHidden()
  const preshow = useShow()
  const show = useShow(200)
  const shown = useShow(500)
  const { touched, touchHide, handleTouchStart, handleTouchMove, handleTouchEnd } = useTouchHide({
    hide: onhide,
    touchStart () {
      elementData.value = getData()
    },
    element: ref,
  })
  const styles = useStyle()

  usePopup()
  useEscapeListener(onhide)

  const getData = (): PopoutElementData => element?.value?.isConnected
    ? ({
        rect: element.value.getBoundingClientRect(),
        styles: window.getComputedStyle(element.value),
      })
    : ({
        rect: new DOMRect(window.innerWidth / 2, window.innerHeight / 2, 0, 0),
        styles: createStyles(),
      })

  const elementData = new State<PopoutElementData>(getData())

  if (hide) {
    new Watch(() => {
      if (hide.value) {
        elementData.value = getData()
      }
    })
  }

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
        '--ui-popout-touch-hide': () => `${touchHide.value}`,
        background: () => `${use(background) || elementData.value.styles.background}`,
      }}
      ontouchstart={handleTouchStart}
      ontouchmove={handleTouchMove}
      ontouchend={handleTouchEnd}
      class={() => classes([
        styles.root,
        preshow.value && styles.preshow,
        show.value && styles.show,
        shown.value && styles.shown,
        hide?.value && styles.hide,
        touched.value && styles.touch,
      ])}>
      <show when={closeButton}>
        <div class={() => styles.static}>
          <CloseButton
            onclick={onhide}
            {...typeof closeButton === 'boolean' ? {} : closeButton}
          />
        </div>
      </show>
      <Flex
        {...props}
        ref={ref}
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
    <show when={show}>
      <portal parent={document.body}>
        <delay ref={hide} hide={600}>
          <PopoutElement
            onhide={() => setHide?.(false)}
            {...props}>
            {children}
          </PopoutElement>
        </delay>
      </portal>
    </show>
  )
}
