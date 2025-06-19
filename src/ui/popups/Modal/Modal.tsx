import { Delay, type HTMLStyleProps, inject, Ref, Show, type StateProp, style } from '@innet/dom'
import classes from 'html-classes'
import { type Merge } from 'src/types'
import { State } from 'watch-state'

import { usePopup } from '../../../hooks'
import { Button, type ButtonProps, CloseButton } from '../../buttons'
import { Flex } from '../../layout'
import { type HTMLOverlayElement } from '../Overlay'
import styles from './Modal.scss'

const useStyles = style(styles)

export interface ModalProps extends Merge<HTMLStyleProps<HTMLDivElement>, {
  height?: StateProp<number | string>
  width?: StateProp<number | string>
  buttons?: string[]
  headButtons?: string[]
  buttonProps?: Record<string, ButtonProps>
  onclose?: (result: string, close: () => void) => void
  onclosed?: (result: string) => void
  onshow?: () => void
  title?: JSX.Element
  content?: JSX.Element
  subTitle?: JSX.Element
  buttonChildren?: Record<string, JSX.Element>
}> {}

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
  children,
  title,
  content,
  subTitle,
  buttonChildren = {},
  ...props
}: ModalProps = {}) {
  const styles = useStyles()

  usePopup()

  const hidden = new Ref<State<boolean>>()
  const show = new State(false)
  const scroll = new State(0)
  const element = new Ref<HTMLOverlayElement>()
  const headButtonsLength = headButtons?.length
  const buttonsLength = buttons?.length

  if (!('close' in buttonChildren)) {
    buttonChildren.close = defaultCloseButton
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
    <Delay ref={hidden} hide={300}>
      <div
        {...props}
        style={{
          ...style,
          '--ui-modal-width': inject(width, width => typeof width === 'number' ? `${width}px` : width || ''),
          '--ui-modal-height': inject(height, height => typeof height === 'number' ? `${height}px` : height || ''),
        }}
        ref={element}
        // @ts-expect-error TODO: fix types
        _close={() => handleClose}
        class={() => classes([
          styles.root,
          show.value && styles.show,
          hidden.value?.value && styles.hide,
          !title && !subTitle && styles.noTitle,
        ])}>
        <Show when={title || subTitle || headButtonsLength}>
          <Flex padding={24} element='header' vertical align='stretch' class={() => styles.header}>
            <Show when={title || headButtonsLength}>
              <Flex flex>
                <Flex flex>
                  {title || null}
                </Flex>
                <Show when={headButtonsLength}>
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
                        buttonChildren[id] || id,
                      ],
                    }))}
                  </div>
                </Show>
              </Flex>
            </Show>
            <Show when={subTitle}>
              <div class={() => styles.subTitle}>
                {subTitle}
              </div>
            </Show>
          </Flex>
        </Show>
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
        <Show when={buttonsLength}>
          <Flex reverse justify='center' wrap padding={16} gap={16}>
            {buttons?.map((id, index) => (
              <Button
                flex
                view={index ? 'secondary' : 'primary'}
                {...buttonProps[id]}
                data-button={id}
                onclick={() => handleClose(id)}>
                {buttonChildren[id] || id}
              </Button>
            ))}
          </Flex>
        </Show>
      </div>
    </Delay>
  )
}
