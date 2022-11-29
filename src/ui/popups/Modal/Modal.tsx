import { HTMLStyleProps, Ref, style } from '@innet/dom'
import { useSlots } from '@innet/jsx'
import classes from 'html-classes'
import { onDestroy, State } from 'watch-state'

import { setOverflow } from '../../../utils'
import { Button, ButtonProps } from '../../buttons'
import { Icon } from '../../content'
import { HTMLModalElement } from '../Modals/types'
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

export function * Modal ({
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
  const element = new Ref<HTMLModalElement>()
  const headButtonsLength = headButtons?.length
  const buttonsLength = buttons?.length

  style = width ? `--ui-modal-width:${width}px;${style}` : style

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

  yield (
    <delay ref={hidden} hide={300}>
      <div
        {...props}
        style={style}
        ref={element}
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
            <div class={styles.buttons}>
              {buttons.map(id => (
                <Button
                  {...buttonProps[id]}
                  data-button={id}
                  onclick={() => handleClose(id)}
                  class={styles.button}>
                  {slots[`button-${id}`] || id}
                </Button>
              ))}
            </div>
            )
          : null}
      </div>
      {() => {
        if (element.value) {
          element.value.close = handleClose
        }
      }}
    </delay>
  )
}
