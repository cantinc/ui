import { HTMLStyleProps, Ref, style, use } from '@innet/dom'
import { useSlots } from '@innet/jsx'
import classes from 'html-classes'
import { onDestroy, State } from 'watch-state'

import { setOverflow } from '../../../utils'
import { Button, ButtonProps } from '../../buttons'
import { Icon } from '../../icons'
import { Flex } from '../../layout'
import { HTMLOverlayElement } from '../Overlay'
import styles from './Modal.scss'

const useStyles = style(styles)

export interface ModalProps extends Omit<HTMLStyleProps<HTMLDivElement>, 'onclose'> {
  width?: number
  buttons?: string[]
  headButtons?: string[]
  buttonProps?: { [K: string]: ButtonProps }
  onclose?: (result: string, close: () => void) => void
  onclosed?: (result: string) => void
  onshow?: () => void
}

let modalsCount = 0

export function Modal ({
  buttons,
  width,
  style = '',
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

  const hidden = new Ref<State<boolean>>()
  const show = new State<boolean>(false)
  const element = new Ref<HTMLOverlayElement>()
  const headButtonsLength = headButtons?.length
  const buttonsLength = buttons?.length

  const newStyle = width ? () => `--ui-modal-width:${width}px;${use(style)}` : style

  if (!('button-close' in slots)) {
    slots['button-close'] = <Icon icon='cross' />
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

  if (!modalsCount) {
    setOverflow('hidden')
  }
  modalsCount++
  onDestroy(() => {
    modalsCount--

    if (!modalsCount) {
      setOverflow('')
    }
  })

  return (
    <delay ref={hidden} hide={300}>
      <div
        {...props}
        style={newStyle}
        ref={element}
        // @ts-expect-error
        _close={() => handleClose}
        class={() => classes([
          styles.root,
          show.value && styles.show,
          hidden.value?.value && styles.hide,
        ])}>
        {title
          ? (
            <header class={styles.header}>
              {title || null}
              {subTitle && (
                <div class={styles.subTitle}>
                  {subTitle}
                </div>
              )}
            </header>
            )
          : null}
        {headButtonsLength
          ? (
            <div class={styles.headButtons}>
              {headButtons.map(id => (
                <button
                  {...buttonProps[id]}
                  data-button={id}
                  onclick={() => handleClose(id)}
                  class={styles.headButton}>
                  {slots[`button-${id}`] || id}
                </button>
              ))}
            </div>
            )
          : null}
        {content && (
          <div class={styles.content}>
            {content}
          </div>
        )}
        {children}
        {buttonsLength
          ? (
            <Flex reverse justify='center' wrap padding={16} gap={16}>
              {buttons.map((id, index) => (
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
            )
          : null}
      </div>
    </delay>
  )
}
