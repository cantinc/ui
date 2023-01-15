import { use } from '@innet/dom'

import { UIValidationErrors } from '../../../constants/validation'
import { useField, useForm } from '../../../hooks'
import { getExtension } from '../../../utils'
import { Upload, UploadProps } from '../../interaction'
import { FormFieldProps } from '../Form/types'

export interface FormUploadProps extends Omit<UploadProps, keyof FormFieldProps>, FormFieldProps<File[]> {

}

export function FormUpload (props: FormUploadProps) {
  const {
    ref,
    onchange,
    disabled,
    validation = [],
    defaultValue,
    hint,
    accept,
    name,
    ...rest
  } = props

  if (accept) {
    props.validation = [
      (values: File[]) => {
        const currentAccept = use(accept)

        if (currentAccept) {
          const parsedAccept = currentAccept.split(',').map(ext => ext.trim())

          for (let i = 0; i < values.length; i++) {
            const value = values[i]
            const ext = getExtension(value)

            if (parsedAccept.includes(`.${ext}`)) continue

            return {
              error: UIValidationErrors.extension,
              data: {
                key: name,
                accept,
              },
            }
          }
        }
      },
      ...validation,
    ]
  }

  const { loading } = useForm()
  const { error, element, state } = useField<File[]>([], ref)

  return (
    <Upload
      {...rest}
      accept={accept}
      name={name}
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
