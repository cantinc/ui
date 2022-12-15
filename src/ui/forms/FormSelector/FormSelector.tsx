import { use } from '@innet/dom'
import { useSlots } from '@innet/jsx'

import { useField, useForm } from '../../../hooks'
import { Selector, SelectorProps } from '../../interaction'
import { FormFieldProps } from '../Form/types'

export interface FormSelectorProps extends Omit<SelectorProps, keyof FormFieldProps>, FormFieldProps {

}

export function FormSelector ({
  validation,
  disabled,
  inputRef,
  onchange,
  ...props
}: FormSelectorProps) {
  const { before, after, hint } = useSlots()
  const { loading } = useForm()
  const { state, error, element } = useField('', inputRef)

  return (
    <Selector
      {...props}
      inputRef={element}
      oninput={(value: any) => {
        state.value = value
        error.value = ''
        onchange?.(value)
      }}
      error={() => Boolean(error.value)}
      value={() => state.value}
      disabled={(() => use(disabled) ?? loading.value)}>
      {before && <slot name='before'>{before}</slot>}
      {after && <slot name='after'>{after}</slot>}
      <slot name='hint'>{() => error.value || hint}</slot>
    </Selector>
  )
}
