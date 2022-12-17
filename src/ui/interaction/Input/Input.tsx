import { HTMLProps, Ref, StateProp, style, use } from '@innet/dom'
import { useSlots } from '@innet/jsx'
import { State } from 'watch-state'

import { Icon, IconProps } from '../../content/Icon'
import { Flex, FlexProps } from '../../layout'
import styles from './Input.scss'

const useStyle = style(styles)

export type InputType = 'text' | 'password'

export interface InputProps extends Omit<FlexProps<HTMLLabelElement>, 'oninput'> {
  label?: StateProp<string>
  value?: StateProp<string>
  oninput?: (value: string) => void
  placeholder?: StateProp<string>
  error?: StateProp<boolean>
  disabled?: StateProp<boolean>
  required?: StateProp<boolean>
  type?: StateProp<InputType>
  name?: StateProp<string>
  clearable?: boolean
  inputRef?: Ref<HTMLInputElement>
  renderInput?: (props: HTMLProps<HTMLInputElement>) => any
  props?: {
    input?: HTMLProps<HTMLInputElement>
    before?: HTMLProps<HTMLSpanElement>
    after?: HTMLProps<HTMLSpanElement>
    border?: HTMLProps<HTMLSpanElement>
    label?: HTMLProps<HTMLSpanElement>
    hint?: HTMLProps<HTMLSpanElement>
    clear?: Partial<IconProps>
  }
}

export const defaultRenderInput = (props: HTMLProps<HTMLInputElement>) => (<input {...props} />)

export function Input ({
  label,
  value = new State(''),
  oninput,
  props,
  placeholder,
  renderInput = defaultRenderInput,
  error,
  disabled,
  required,
  inputRef = new Ref<HTMLInputElement>(),
  name,
  type,
  clearable,
  ...rest
}: InputProps = {}) {
  const styles = useStyle()
  const { before, after, hint } = useSlots()

  if (value instanceof State) {
    const oldOnChange = oninput
    oninput = (val: string) => {
      value.value = val
      oldOnChange?.(val)
    }
  }

  const handleInput = (e: any) => {
    oninput?.(e.target.value)
  }

  const elementClass = () => styles.input

  const element = renderInput({
    type,
    disabled,
    required,
    placeholder,
    ...(props?.input as HTMLProps<HTMLInputElement>),
    oninput: handleInput,
    'data-value': value,
    _value: value,
    class: elementClass,
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

  const clearContent = clearable
    ? (
      <Icon
        icon='cross'
        {...props?.clear}
        onmousedown={(e: Event) => {
          e.preventDefault()
          oninput?.('')
        }}
        class={() => styles.clear}
      />
      )
    : null

  return (
    <Flex
      align='center'
      padding={16}
      gap={8}
      element='label'
      {...rest}
      onmousedown={(e: any) => {
        if (e.target !== inputRef.value) {
          e.preventDefault()
        }
        ;(rest as any)?.onmousedown?.(e)
      }}
      class={() => [
        styles.root,
        use(label) && styles.withLabel,
        use(error) && styles.error,
      ]}>
      {element}
      {clearContent}
      {beforeContent}
      {labelContent}
      {afterContent}
      {hintContent}
      <span {...props?.border} class={() => styles.border} />
    </Flex>
  )
}
