import { HTMLProps, style, use, WatchProp } from '@innet/dom'
import { useSlots } from '@innet/jsx'
import { State } from 'watch-state'

import { Flex, FlexProps } from '../../layout'
import styles from './Input.scss'

const useStyle = style(styles)

export interface InputProps extends Omit<FlexProps<HTMLLabelElement>, 'onchange'> {
  label?: string
  value?: WatchProp<string>
  onchange?: (value: string) => void
  placeholder?: string
  error?: WatchProp<boolean>
  props?: {
    input?: HTMLProps<HTMLInputElement>
    before?: HTMLProps<HTMLSpanElement>
    after?: HTMLProps<HTMLSpanElement>
    border?: HTMLProps<HTMLSpanElement>
    label?: HTMLProps<HTMLSpanElement>
    hint?: HTMLProps<HTMLSpanElement>
  }
}

export function Input ({
  label,
  value,
  onchange,
  props,
  placeholder,
  error,
  ...rest
}: InputProps = {}) {
  const styles = useStyle()
  const { before, after, hint } = useSlots()

  if (!value) {
    const state = new State('')
    const oldOnChange = onchange
    value = () => state.value
    onchange = (value: string) => {
      state.value = value
      oldOnChange?.(value)
    }
  }

  const handleChange = (e: any) => {
    onchange?.(e.target.value)
  }

  const elementClass = () => styles.input

  const element = (
    <input
      {...(props?.input as HTMLProps<HTMLInputElement>)}
      onchange={handleChange}
      data-value={value}
      _value={value}
      class={elementClass}
      placeholder={placeholder}
    />
  )

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
