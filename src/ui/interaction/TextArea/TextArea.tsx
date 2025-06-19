import { Ref, style } from '@innet/dom'
import { onDestroy, State } from 'watch-state'

import { Input, type InputProps } from '../Input'
import styles from './TextArea.scss'

const useStyles = style(styles)

export interface TextAreaProps extends Omit<InputProps, 'renderInput' | 'inputRef'> {
  resize?: boolean | 'auto' | 'none' | 'both' | 'horizontal' | 'vertical' | 'inherit'
  rows?: number
  inputRef?: Ref<HTMLTextAreaElement>
}

export function TextArea ({
  resize = 'auto',
  rows = 4,
  style,
  inputRef = new Ref<HTMLTextAreaElement>(),
  ...props
}: TextAreaProps = {}) {
  const styles = useStyles()
  const size = new State(0)

  const updateSize = () => {
    const scrollHeight = Number(inputRef.value?.scrollHeight)
    const clientHeight = Number(inputRef.value?.clientHeight)

    if (scrollHeight !== clientHeight) {
      size.value = scrollHeight
    } else {
      size.value--
      let scrollHeight = Number(inputRef.value?.scrollHeight)
      let clientHeight = Number(inputRef.value?.clientHeight)

      if (scrollHeight === clientHeight) {
        while ((scrollHeight = Number(inputRef.value?.scrollHeight)) === (clientHeight = Number(inputRef.value?.clientHeight))) {
          size.value -= 10

          if (size.value < 0) {
            size.value = 0
            break
          }
        }
        size.value = scrollHeight
      } else {
        size.value++
      }
    }
  }

  if (resize === 'auto') {
    const timer = setTimeout(updateSize)
    onDestroy(() => clearTimeout(timer))
  }

  return (
    <Input
      inputRef={inputRef as any}
      {...props}
      class={styles}
      renderInput={({ oninput, ...props }) => (
        <textarea
          rows={rows}
          style={{
            ...style,
            '--ui-textarea-resize': !resize || resize === 'auto' ? '' : resize === true ? 'both' : resize,
            '--ui-textarea-min': !resize || resize !== 'auto' ? '' : `${rows * 20}px`,
            '--ui-textarea-autosize': !resize || resize !== 'auto' ? '' : () => `${size.value}px`,
          }}
          required={props.required}
          placeholder={props.placeholder}
          ref={props.ref as any}
          name={props.name}
          disabled={props.disabled}
          oninput={(e: Event) => {
            ;(oninput as any)(e)
            if (resize === 'auto') {
              updateSize()
            }
          }}
          _value={props._value}
          data-value={props['data-value']}
          class={props.class}>
          {props.value}
        </textarea>
      )}
    />
  )
}
