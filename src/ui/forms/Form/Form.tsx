import { ValidationError } from '@cantinc/utils'
import { Ref } from '@innet/dom'
import { Context, useChildren, useContext } from '@innet/jsx'
import { onDestroy, State } from 'watch-state'

import { FormContext, formContext, FormField } from '../../../hooks'
import { Flex } from '../../layout'
import { notify } from '../../popups'
import { FormActionHandle, FormErrorHandle, FormNotificationHandle, FormProps } from './types'

export const formErrorHandler = new Context<FormErrorHandle>(({ error }) => error)
export const formActionHandler = new Context<FormActionHandle>(() => {})
export const formNotificationHandler = new Context<FormNotificationHandle>(
  ({ notification }) => notification && notify(notification, 'success'),
)

export function Form ({
  loading = new State(false),
  action,
  notification,
  method = 'POST',
  onsuccess,
  onerror,
  onreset,
  onsubmit,
  ref = new Ref(),
  ...props
}: FormProps = {}) {
  const children = useChildren()
  const errorHandler = useContext(formErrorHandler)
  const actionHandler = useContext(formActionHandler)
  const notificationHandler = useContext(formNotificationHandler)

  const form: FormContext = {
    ...props,
    fields: new Set(),
    destroyed: false,
    loading,
    ref,
    method,
    notification,
    action,
  }

  onDestroy(() => {
    form.destroyed = true
  })

  const handleSuccess = (data?: any) => {
    form.data = data

    if (notification) {
      notificationHandler(form)
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
    onsubmit?.(e)

    const error = validation()

    if (error) return

    if (action) {
      const result = actionHandler(form)

      if (result) {
        if (result instanceof Promise) {
          loading.value = true
          result
            .then(data => handleSuccess(data), e => onerror?.(form, e))
            .finally(() => {
              loading.value = false
            })
        } else {
          handleSuccess()
        }
      } else {
        handleSuccess()
      }
    } else {
      handleSuccess()
    }
  }

  const handleReset = (e: Event) => {
    e.preventDefault()
    onreset?.(e)

    for (const { state, defaultValue, error } of form.fields) {
      state.value = defaultValue
      error.value = ''
    }
  }

  return (
    <context for={formContext} set={form}>
      <Flex<HTMLFormElement>
        vertical
        align='stretch'
        novalidate
        {...props}
        ref={ref}
        element='form'
        action={action}
        onsubmit={handleSubmit}
        onreset={handleReset}>
        {children}
      </Flex>
    </context>
  )
}
