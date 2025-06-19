import { use } from '@innet/dom'
import { type Merge } from 'src/types'

import { useField, useForm } from '../../../hooks'
import { Selector, type SelectorProps } from '../../interaction'
import { type FormFieldProps } from '../Form/types'

export interface FormSelectorProps extends Merge<SelectorProps, FormFieldProps> {}

export function FormSelector ({
  validation,
  disabled,
  inputRef,
  onchange,
  hint,
  ...props
}: FormSelectorProps) {
  const { loading } = useForm('<FormSelector> MUST be add in a <Form>')
  const { state, error, element } = useField('', inputRef)

  return (
    <Selector
      hint={() => error.value || hint}
      {...props}
      inputRef={element}
      oninput={(value: any) => {
        state.value = value
        error.value = ''
        onchange?.(value)
      }}
      error={() => Boolean(error.value)}
      value={state}
      disabled={(() => use(disabled) ?? loading.value)}
    />
  )
}
