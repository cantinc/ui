import { HTMLProps, Ref, style, use, WatchProp } from '@innet/dom'
import { useSlots } from '@innet/jsx'
import { State } from 'watch-state'

import { Flex, FlexProps } from '../../layout'
import styles from './Input.scss'

const useStyle = style(styles)

export interface InputProps extends Omit<FlexProps<HTMLLabelElement>, 'oninput'> {
  label?: string
  value?: WatchProp<string>
  oninput?: (value: string) => void
  placeholder?: string
  error?: WatchProp<boolean>
  disabled?: WatchProp<boolean>
  required?: WatchProp<boolean>
  name?: WatchProp<string>
  inputRef?: Ref<HTMLInputElement>
  renderInput?: (props: HTMLProps<HTMLInputElement>) => any
  props?: {
    input?: HTMLProps<HTMLInputElement>
    before?: HTMLProps<HTMLSpanElement>
    after?: HTMLProps<HTMLSpanElement>
    border?: HTMLProps<HTMLSpanElement>
    label?: HTMLProps<HTMLSpanElement>
    hint?: HTMLProps<HTMLSpanElement>
  }
}

export const defaultRenderInput = (props: HTMLProps<HTMLInputElement>) => (<input {...props} />)

export function Input ({
  label,
  value,
  oninput,
  props,
  placeholder,
  renderInput = defaultRenderInput,
  error,
  disabled,
  required,
  inputRef,
  name,
  ...rest
}: InputProps = {}) {
  const styles = useStyle()
  const { before, after, hint } = useSlots()

  if (!value) {
    const state = new State('')
    const oldOnChange = oninput
    value = () => state.value
    oninput = (value: string) => {
      state.value = value
      oldOnChange?.(value)
    }
  }

  const handleInput = (e: any) => {
    oninput?.(e.target.value)
  }

  const elementClass = () => styles.input

  const element = renderInput({
    ...(props?.input as HTMLProps<HTMLInputElement>),
    disabled: () => use(disabled) || undefined,
    oninput: handleInput,
    'data-value': value,
    _value: value,
    required,
    class: elementClass,
    placeholder,
    ref: inputRef,
    name,
  })

  const labelContent = label
    ? <span {...props?.label} class={styles.label}>{label}</span>
    : null

  const beforeContent = before
    ? <span {...props?.before} class={styles.before}>{before}</span>
    : null

  const afterContent = after
    ? <span {...props?.after} class={styles.after}>{after}</span>
    : null

  const hintContent = hint
    ? <span {...props?.hint} class={styles.hint}>{hint}</span>
    : null

  return (
    <Flex
      align='center'
      padding={16}
      gap={8}
      element='label'
      {...rest}
      class={() => [
        styles.root,
        label && styles.withLabel,
        label && styles.withLabel,
        use(error) && styles.error,
      ]}>
      {element}
      {beforeContent}
      {labelContent}
      {afterContent}
      {hintContent}
      <span {...props?.border} class={styles.border} />
    </Flex>
  )
}
