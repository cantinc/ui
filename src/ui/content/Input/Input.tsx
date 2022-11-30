import { HTMLProps, style, WatchProp } from '@innet/dom'
import { useSlots } from '@innet/jsx'

import { Flex, FlexProps } from '../../position/Flex'
import styles from './Input.scss'

const useStyle = style(styles)

export interface InputProps extends Omit<FlexProps<HTMLLabelElement>, 'onchange'> {
  label?: string
  value?: WatchProp<string>
  onchange?: (value: string) => void
  props?: {
    input?: HTMLProps<HTMLInputElement>
    before?: HTMLProps<HTMLSpanElement>
    after?: HTMLProps<HTMLSpanElement>
    border?: HTMLProps<HTMLSpanElement>
    label?: HTMLProps<HTMLSpanElement>
  }
}

export function Input ({
  label,
  value,
  onchange,
  props,
  ...rest
}: InputProps = {}) {
  const styles = useStyle()
  const { before, after } = useSlots()

  const elementClass = () => styles.input

  const element = <input {...(props?.input as HTMLProps<HTMLInputElement>)} class={elementClass} />

  const labelContent = label
    ? <span {...props?.label} class={styles.label}>{label}</span>
    : null

  const beforeContent = before
    ? <span {...props?.before} class={styles.before}>{before}</span>
    : null

  const afterContent = after
    ? <span {...props?.after} class={styles.after}>{after}</span>
    : null

  return (
    <Flex align='center' padding={16} element='label' {...rest} class={() => [styles.root, label && styles.withLabel]}>
      {element}
      {beforeContent}
      {labelContent}
      {afterContent}
      <span {...props?.border} class={styles.border} />
    </Flex>
  )
}
