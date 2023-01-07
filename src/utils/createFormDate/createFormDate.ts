import { FormContext } from '../../hooks'
import { FormMethod } from '../../ui'

export function createFormDate (form: FormContext, method: FormMethod = 'POST') {
  const body = new FormData()

  for (const field of form.fields) {
    if (method === 'PATCH') {
      if (field.defaultValue === field.state.value) {
        continue
      }
    }

    body.append(field.name, field.state.value)
  }

  return body
}
