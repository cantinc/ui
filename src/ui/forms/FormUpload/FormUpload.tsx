import { use } from '@innet/dom'
import { State } from 'watch-state'

import { UIValidationErrors } from '../../../constants/validation'
import { useField, useForm } from '../../../hooks'
import { actionProp, getExtension } from '../../../utils'
import { Upload, UploadFile, UploadProps } from '../../interaction'
import { FormFieldProps } from '../Form/types'

export interface FormUploadProps extends Omit<UploadProps, keyof FormFieldProps>, FormFieldProps<UploadFile[]> {

}

export function FormUpload (props: FormUploadProps) {
  const {
    ref,
    disabled,
    validation = [],
    defaultValue,
    hint,
    accept,
    name,
    files = new State([]),
    onchange = actionProp(files, props.onchange),
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
  const { error, element, state } = useField<UploadFile[]>([], ref)

  const handleChange = (files: UploadFile[]) => {
    error.value = ''
    onchange?.(files)
  }

  return (
    <Upload
      {...rest}
      files={state}
      accept={accept}
      name={name}
      ref={element}
      onchange={handleChange}
      error={() => Boolean(error.value)}
      disabled={() => use(disabled) ?? loading.value}
      hint={() => error.value || hint}
    />
  )
}
