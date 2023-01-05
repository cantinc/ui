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
  style,
  inputRef = new Ref<HTMLTextAreaElement>(),
  ...props
}: TextAreaProps = {}) {
  const styles = useStyles()
  const withChildren = useChildrenProvider()
  const size = new State(0)
  const updateSize = () => {
    size.value = 0
    size.value = Number(inputRef.value?.scrollHeight)
  }

  if (resize === 'auto') {
    const timer = setTimeout(updateSize)
    onDestroy(() => clearTimeout(timer))
  }

  return withChildren(
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
