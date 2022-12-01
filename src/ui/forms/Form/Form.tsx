import { ValidationError, ValidationErrors } from '@cantinc/utils'
import { WatchProp } from '@innet/dom'
import { Context, useChildren, useContext } from '@innet/jsx'
import { onDestroy, State } from 'watch-state'

import { FormContext, formContext, FormField } from '../../../hooks'
import { Flex, FlexProps } from '../../layout'
import { notify } from '../../popups'

export interface FormProps extends FlexProps<HTMLFormElement> {
  action?: WatchProp<string>
  loading?: State<boolean>
  notification?: string
  onsuccess?: () => void
}

export type FormErrorHandle = (error: ValidationError<any>, form: FormContext) => string | Promise<string>

export const formErrorHandler = new Context<FormErrorHandle>(({ error }) => error)

export function Form ({
  loading = new State(false),
  action,
  notification,
  onsuccess,
  ...props
}: FormProps = {}) {
  const children = useChildren()
  const errorHandler = useContext(formErrorHandler)

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
    onsuccess?.()
  }

  const setError = async (error: ValidationError<any>, field: FormField<any, any>) => {
    field.error.value = await errorHandler(error, form)
    console.log(field.error.value)
  }

  const validation = () => {
    let result = false
    let focused = false

    for (const field of form.fields) {
      if (field.required && !field.state.value) {
        if (!focused) {
          field.element.value.scrollIntoView({
            block: 'center',
            behavior: 'smooth',
            inline: 'center',
          })
          field.element.value.focus()
          focused = true
        }
        setError({
          error: ValidationErrors.required,
          data: {
            key: field.name,
          },
        }, field)
        result = true
      }
    }

    return result
  }

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()

    const error = validation()

    if (!error) {
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
