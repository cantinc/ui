import { type HTMLProps, inject, Ref, type StateProp, style, use } from '@innet/dom'
import { useSlots } from '@innet/jsx'
import classes from 'html-classes'
import { onDestroy, State } from 'watch-state'

import { debounceCall } from '../../../utils'
import { Icon, type IconProps } from '../../icons'
import { Flex, type FlexProps } from '../../layout'
import styles from './Input.scss'

const useStyle = style(styles)

export type InputType = 'text' | 'password' | 'date' | 'email' | 'tel' | 'number' | 'color'
export type RequiredType = 'star'

export interface InputProps extends Omit<FlexProps<HTMLLabelElement>, 'oninput' | 'autofocus'> {
  label?: StateProp<string>
  value?: StateProp<string>
  oninput?: (value: string) => void
  placeholder?: StateProp<string>
  error?: StateProp<boolean>
  disabled?: StateProp<boolean>
  required?: StateProp<boolean | RequiredType>
  type?: StateProp<InputType>
  name?: StateProp<string>
  autofocus?: boolean | number
  clearable?: boolean
  debounce?: boolean | number
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
  autofocus,
  renderInput = defaultRenderInput,
  error,
  disabled,
  required,
  inputRef = new Ref<HTMLInputElement>(),
  name,
  type,
  clearable,
  debounce,
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

  if (debounce && oninput) {
    oninput = debounceCall(oninput, debounce === true ? 300 : debounce)
  }

  const handleInput = (e: any) => {
    oninput?.(e.target.value)
  }

  const handleChange = (e: any) => {
    if (e.target.value !== use(value)) {
      oninput?.(e.target.value)
    }
  }

  const elementClass = () => styles.input

  const element = renderInput({
    type,
    disabled,
    required: inject(required, required => required ? true : undefined),
    placeholder,
    ...(props?.input as HTMLProps<HTMLInputElement>),
    oninput: handleInput,
    onchange: handleChange,
    'data-value': value,
    _value: value,
    class: elementClass,
    ref: inputRef,
    name,
  })

  const labelContent = label
    ? (
      <span
        {...props?.label}
        class={() => classes([
          styles.label,
          use(required) === 'star' && styles.labelStar,
        ])}>
        {label}
      </span>
      )
    : null

  const beforeContent = before
    ? <span {...props?.before} class={() => styles.before}>{before}</span>
    : null

  const afterContent = after
    ? <span {...props?.after} class={() => styles.after}>{after}</span>
    : null

  const hintContent = hint
    ? <span {...props?.hint} class={() => styles.hint}>{hint}</span>
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

  if (autofocus) {
    const timer = setTimeout(() => {
      inputRef.value?.focus()
    }, typeof autofocus === 'number' ? autofocus : 0)
    onDestroy(() => clearTimeout(timer))
  }

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
