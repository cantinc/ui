import { use } from '@innet/dom'

import { useField, useForm } from '../../../hooks'
import { Upload, UploadProps } from '../../interaction'
import { FormFieldProps } from '../Form/types'

export interface FormUploadProps extends Omit<UploadProps, keyof FormFieldProps>, FormFieldProps<File[]> {

}

export function FormUpload ({
  ref,
  onchange,
  disabled,
  validation,
  defaultValue,
  hint,
  ...props
}: FormUploadProps) {
  const { loading } = useForm()
  const { error, element, state } = useField<File[]>([], ref)

  return (
    <Upload
      {...props}
      ref={element}
      onchange={(files) => {
        error.value = ''
        state.value = files.map(({ file }) => file).filter(file => file) as File[]
        onchange?.(state.value)
      }}
      error={() => Boolean(error.value)}
      disabled={() => use(disabled) ?? loading.value}
      hint={() => error.value || hint}
    />
  )
}
