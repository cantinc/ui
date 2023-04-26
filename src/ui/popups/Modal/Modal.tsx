import { type HTMLStyleProps, inject, Ref, type StateProp, style } from '@innet/dom'
import { useSlots } from '@innet/jsx'
import classes from 'html-classes'
import { State } from 'watch-state'

import { usePopup } from '../../../hooks'
import { Button, type ButtonProps, CloseButton } from '../../buttons'
import { Flex } from '../../layout'
import { type HTMLOverlayElement } from '../Overlay'
import styles from './Modal.scss'

const useStyles = style(styles)

export interface ModalProps extends Omit<HTMLStyleProps<HTMLDivElement>, 'onclose'> {
  height?: StateProp<number | string>
  width?: StateProp<number | string>
  buttons?: string[]
  headButtons?: string[]
  buttonProps?: Record<string, ButtonProps>
  onclose?: (result: string, close: () => void) => void
  onclosed?: (result: string) => void
  onshow?: () => void
}

const defaultCloseButton = <CloseButton offset={8} padding={8} size={16} />

export function Modal ({
  buttons,
  width,
  height,
  style,
  headButtons = ['close'],
  buttonProps = {},
  onclosed,
  onclose,
  onshow,
  onmousedown,
  ...props
}: ModalProps = {}) {
  const styles = useStyles()
  const { '': children, title, content, subTitle, ...slots } = useSlots()
  usePopup()

  const hidden = new Ref<State<boolean>>()
  const show = new State(false)
  const scroll = new State(0)
  const element = new Ref<HTMLOverlayElement>()
  const headButtonsLength = headButtons?.length
  const buttonsLength = buttons?.length

  if (!('button-close' in slots)) {
    slots['button-close'] = defaultCloseButton
  }

  setTimeout(() => {
    show.value = true
    onshow?.()
  }, 300)

  const handleClose = (result: string) => {
    if (hidden.value?.value) return

    const close = () => onclosed?.(result)

    if (onclose) {
      return onclose(result, close)
    }

    close()
  }

  return (
    <delay ref={hidden} hide={300}>
      <div
        {...props}
        style={{
          ...style,
          '--ui-modal-width': inject(width, width => typeof width === 'number' ? `${width}px` : width || ''),
          '--ui-modal-height': inject(height, height => typeof height === 'number' ? `${height}px` : height || ''),
        }}
        ref={element}
        _close={() => handleClose}
        class={() => classes([
          styles.root,
          show.value && styles.show,
          hidden.value?.value && styles.hide,
          !title && !subTitle && styles.noTitle,
        ])}>
        <show when={title || subTitle || headButtonsLength}>
          <Flex padding={24} element='header' vertical align='stretch' class={() => styles.header}>
            <show when={title || headButtonsLength}>
              <Flex flex>
                <Flex flex>
                  {title || null}
                </Flex>
                <show when={headButtonsLength}>
                  <div class={() => styles.headButtons}>
                    {headButtons.map(id => ({
                      type: id === 'close' ? 'span' : 'button',
                      props: {
                        ...buttonProps[id],
                        'data-button': id,
                        onclick: () => handleClose(id),
                        class: () => styles.headButton,
                      },
                      children: [
                        slots[`button-${id}`] || id,
                      ],
                    }))}
                  </div>
                </show>
              </Flex>
            </show>
            <show when={subTitle}>
              <div class={() => styles.subTitle}>
                {subTitle}
              </div>
            </show>
          </Flex>
        </show>
        {content && (
          <div
            onscroll={(e: any) => {
              scroll.value = e.target.scrollTop
            }}
            style={{
              '--scroll': () => `${scroll.value}px`,
            }}
            class={() => styles.content}>
            {content}
          </div>
        )}
        {children}
        <show when={buttonsLength}>
          <Flex reverse justify='center' wrap padding={16} gap={16}>
            {buttons?.map((id, index) => (
              <Button
                flex
                view={index ? 'secondary' : 'primary'}
                {...buttonProps[id]}
                data-button={id}
                onclick={() => handleClose(id)}>
                {slots[`button-${id}`] || id}
              </Button>
            ))}
          </Flex>
        </show>
      </div>
    </delay>
  )
}
