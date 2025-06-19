import { use } from '@innet/dom'
import { type Merge } from 'src/types'

import { useField, useForm } from '../../../hooks'
import { TextArea, type TextAreaProps } from '../../interaction'
import { type FormFieldProps } from '../Form'

export interface FormTextAreaProps extends Merge<TextAreaProps, FormFieldProps> {}

export function FormTextArea ({
  inputRef,
  onchange,
  disabled,
  validation,
  hint,
  ...props
}: FormTextAreaProps) {
  const { loading } = useForm('<FormTextArea> MUST be add in a <Form>')
  const { state, error, element } = useField('', inputRef)

  return (
    <TextArea
      {...props}
      inputRef={element}
      value={state}
      oninput={(value: any) => {
        state.value = value
        error.value = ''
        onchange?.(value)
      }}
      hint={() => error.value || hint}
      error={() => Boolean(error.value)}
      disabled={(() => use(disabled) ?? loading.value)}
    />
  )
}
