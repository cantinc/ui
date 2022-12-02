import { ValidationError } from '@cantinc/utils'
import { use, WatchProp } from '@innet/dom'
import { Context, useChildren, useContext } from '@innet/jsx'
import { onDestroy, State } from 'watch-state'

import { FormContext, formContext, FormField } from '../../../hooks'
import { Flex, FlexProps } from '../../layout'
import { notify } from '../../popups'

export interface FormProps extends FlexProps<HTMLFormElement> {
  action?: WatchProp<string>
  loading?: State<boolean>
  notification?: string
  onerror?: (form: FormContext, error?: any) => void
  onsuccess?: (form: FormContext) => void
}

export type FormErrorHandle = (error: ValidationError<any>, form: FormContext) => string | Promise<string>
export type FormActionHandle = (action: string, form: FormContext) => Promise<any> | void

export const formErrorHandler = new Context<FormErrorHandle>(({ error }) => error)
export const formActionHandler = new Context<FormActionHandle>(() => {})

export function Form ({
  loading = new State(false),
  action,
  notification,
  onsuccess,
  onerror,
  ...props
}: FormProps = {}) {
  const children = useChildren()
  const errorHandler = useContext(formErrorHandler)
  const actionHandler = useContext(formActionHandler)

  const form: FormContext = {
    fields: new Set(),
    destroyed: false,
    loading: new State(false),
  }

  onDestroy(() => {
    form.destroyed = true
  })

  const handleSuccess = () => {
    if (notification) {
      notify(notification, 'success')
    }
    onsuccess?.(form)
  }

  const setValidationError = async (error: ValidationError<any>, field: FormField<any, any>) => {
    field.error.value = await errorHandler(error, form)
    console.log(field.error.value)
  }

  const validation = () => {
    let result = false

    const setError = (error: ValidationError<any>, field: FormField<any, any>) => {
      if (!result) {
        field.element.value.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
          inline: 'center',
        })
        field.element.value.focus()
        result = true
      }
      setValidationError(error, field)
    }

    for (const field of form.fields) {
      const { value } = field.state
      const key = field.name

      if (field.validation) {
        for (const validator of field.validation) {
          const error = validator(value, key, form)

          if (error) {
            setError(error, field)
            continue
          }
        }
      }
    }

    return result
  }

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()

    const error = validation()

    if (error) return

    if (action) {
      const result = actionHandler(use(action), form)

      if (result) {
        result.then(handleSuccess, e => onerror?.(form, e))
      } else {
        handleSuccess()
      }
    } else {
      handleSuccess()
    }
  }

  return (
    <context for={formContext} set={form}>
      <Flex<HTMLFormElement>
        novalidate
        element='form'
        onsubmit={handleSubmit}
        action={action}
        {...props}>
        {children}
      </Flex>
    </context>
  )
}
