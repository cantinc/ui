import { Ref, style } from '@innet/dom'
import { onDestroy, State } from 'watch-state'

import { useChildrenProvider } from '../../../hooks'
import { Input, InputProps } from '../Input'
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
  inputRef = new Ref<HTMLTextAreaElement>(),
  ...props
}: TextAreaProps = {}) {
  const styles = useStyles()
  const withChildren = useChildrenProvider()
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

  return withChildren(
    <Input
      inputRef={inputRef as any}
      {...props}
      class={styles}
      renderInput={({ oninput, ...props }) => (
        <textarea
          rows={rows}
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
          _value={props._value}
          data-value={props['data-value']}
          class={props.class}>
          {props.value}
        </textarea>
      )}
    />,
  )
}
