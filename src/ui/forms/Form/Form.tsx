import { ValidationError } from '@cantinc/utils'
import { use } from '@innet/dom'
import { Context, useChildren, useContext } from '@innet/jsx'
import { onDestroy, State } from 'watch-state'

import { FormContext, formContext, FormField } from '../../../hooks'
import { Flex } from '../../layout'
import { notify } from '../../popups'
import { FormActionHandle, FormErrorHandle, FormNotificationHandle, FormProps } from './types'

export const formErrorHandler = new Context<FormErrorHandle>(({ error }) => error)
export const formActionHandler = new Context<FormActionHandle>(() => {})
export const formNotificationHandler = new Context<FormNotificationHandle>(notification => notify(notification, 'success'))

export function Form ({
  loading = new State(false),
  action,
  notification,
  method = 'POST',
  onsuccess,
  onerror,
  ...props
}: FormProps = {}) {
  const children = useChildren()
  const errorHandler = useContext(formErrorHandler)
  const actionHandler = useContext(formActionHandler)
  const notificationHandler = useContext(formNotificationHandler)

  const form: FormContext = {
    fields: new Set(),
    destroyed: false,
    loading,
  }

  onDestroy(() => {
    form.destroyed = true
  })

  const handleSuccess = (action?: string, data?: any) => {
    if (notification) {
      notificationHandler(notification, form, data, action, method)
    }
    onsuccess?.(form)
  }

  const setValidationError = async (error: ValidationError<any>, field: FormField<any, any>) => {
    field.error.value = await errorHandler(error, form)
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
      const currentAction = use(action)
      const result = actionHandler(currentAction, form, method)

      if (result) {
        if (result instanceof Promise) {
          loading.value = true
          result
            .then(data => handleSuccess(currentAction, data), e => onerror?.(form, e))
            .finally(() => {
              loading.value = false
            })
        } else {
          handleSuccess(currentAction, result)
        }
      } else {
        handleSuccess(currentAction)
      }
    } else {
      handleSuccess()
    }
  }

  const handleReset = (e: Event) => {
    e.preventDefault()

    for (const { state, defaultValue, error } of form.fields) {
      state.value = defaultValue
      error.value = ''
    }
  }

  return (
    <context for={formContext} set={form}>
      <Flex<HTMLFormElement>
        novalidate
        element='form'
        onsubmit={handleSubmit}
        onreset={handleReset}
        action={action}
        vertical
        align='stretch'
        {...props}>
        {children}
      </Flex>
    </context>
  )
}
