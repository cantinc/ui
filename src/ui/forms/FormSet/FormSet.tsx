import { required, ValidationErrors } from '@cantinc/utils'
import { useChildren } from '@innet/jsx'
import { onDestroy, State } from 'watch-state'

import { useForm } from '../../../hooks'
import { actionProp } from '../../../utils'
import { Set, type SetProps } from '../../interaction'

export type FormSetProps <P> = SetProps<P> & {
  name?: string | string[]
  defaultValues?: Partial<P>[]
  requiredSet?: boolean
  removeValue?: string | Blob
}

export function FormSet <P extends object> ({
  defaultValues = [],
  removeValue,
  value = new State(defaultValues = defaultValues?.map(props => ({ ...props, removeValue }))),
  onchange,
  requiredSet,
  name,
  ...props
}: FormSetProps<P>) {
  const children = useChildren()
  const form = useForm()
  const formElement = form.ref.value

  onchange = actionProp(value, onchange)

  if (requiredSet) {
    const setName = form.method === 'PATCH'
      ? (name: string) => {
          form.validation[name] = [(value, key) => {
            if (!value || (Array.isArray(value) && !value.length)) {
              return {
                error: ValidationErrors.required,
                data: {
                  key,
                },
              }
            }
          }]
        }
      : (name: string) => {
          form.validation[name] = required(form.validation[name])
        }

    if (Array.isArray(name)) {
      name.forEach(setName)
    } else if (name) {
      setName(name)
    }
  }

  if (formElement && onchange) {
    const resetListener = () => {
      for (const field of form.fields) {
        if (field.removed) {
          form.fields.delete(field)
        }
      }

      onchange?.(defaultValues)
    }

    formElement.addEventListener('reset', resetListener)

    onDestroy(() => {
      if (!form.destroyed) {
        formElement.removeEventListener('reset', resetListener)
      }
    })
  }

  return (
    <Set<P> {...(props as SetProps<P>)} name={name} value={value} onchange={onchange}>
      {children}
    </Set>
  )
}
