import { validation, type ValidationError } from '@cantinc/utils'
import { Ref } from '@innet/dom'
import { Context, useChildren, useContext } from '@innet/jsx'
import { onDestroy, State } from 'watch-state'

import { type FormContext, formContext, type FormField } from '../../../hooks'
import { parseForm } from '../../../utils'
import { Flex } from '../../layout'
import { notify } from '../../popups'
import { type FormActionHandle, type FormErrorHandle, type FormInvalidHandle, type FormNotificationHandle, type FormProps } from './types'

export const formErrorHandler = new Context<FormErrorHandle>(({ error }) => error)
export const formInvalidHandler = new Context<FormInvalidHandle>(() => {})
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
  validation: validationProp,
  oninvalid,
  ref = new Ref(),
  ...props
}: FormProps = {}) {
  const children = useChildren()
  const errorHandler = useContext(formErrorHandler)
  const invalidHandler = useContext(formInvalidHandler)
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
    validation: validationProp || {},
    touched: {},
  }

  onDestroy(() => {
    form.destroyed = true
  })

  const handleSuccess = (responseData?: any) => {
    form.responseData = responseData

    if (notification) {
      notificationHandler(form)
    }
    onsuccess?.(form)
  }

  const setValidationError = async (error: ValidationError<any>, field: FormField<any, any>) => {
    field.error.value = await errorHandler(error, form)
  }

  const validate = () => {
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
      const key = field.name.substring(0, field.name.indexOf('['))

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

    if (result) return result

    const error = validation(form.validation, form.submitData)

    if (error) {
      invalidHandler(error, form)
      oninvalid?.(error, form)
      return error
    }
  }

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    form.submitData = parseForm(form)

    onsubmit?.(e)

    const error = validate()

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

    form.touched = {}
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
