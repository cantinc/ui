import { Ref } from '@innet/dom'
import classes from 'html-classes'
import { onDestroy, State } from 'watch-state'

import { Input, InputProps } from '../Input'
import styles from './TextArea.scss'

export interface TextAreaProps extends Omit<InputProps, 'renderInput' | 'inputRef'> {
  resize?: boolean | 'auto' | 'none' | 'both' | 'horizontal' | 'vertical' | 'inherit'
  rows?: number
  inputRef?: Ref<HTMLTextAreaElement>
}

export function TextArea ({
  resize = 'auto',
  oninput,
  rows = 4,
  inputRef = new Ref<HTMLTextAreaElement>(),
  ...props
}: TextAreaProps = {}) {
  let style: any
  const size = new State(0)
  const updateSize = () => {
    size.value = 0
    size.value = Number(inputRef.value?.scrollHeight)
  }

  if (resize) {
    if (resize === 'auto') {
      style = (() => `--ui-textarea-min:${rows * 20}px;--ui-textarea-autosize:${size.value}px;`) as unknown as string

      const timer = setTimeout(updateSize)
      onDestroy(() => clearTimeout(timer))
    } else {
      style = () => `--ui-textarea-resize:${resize === true ? 'both' : resize};`
    }
  }

  return (
    <Input
      inputRef={inputRef as any}
      {...props}
      renderInput={({ oninput, ...props }) => (
        <textarea
          style={style}
          required={props.required}
          placeholder={props.placeholder}
          ref={props.ref as any}
          name={props.name}
          disabled={props.disabled}
          oninput={(e: Event) => {
            ;(oninput as any)(e)
            updateSize()
          }}
          data-value={props['data-value']}
          class={() => classes([props.class, styles.input])}>
          {props.value}
        </textarea>
      )}
    />
  )
}
