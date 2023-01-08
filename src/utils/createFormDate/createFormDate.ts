import { FormContext } from '../../hooks'
import { FormMethod } from '../../ui'

export function createFormDate (form: FormContext, method: FormMethod = 'POST') {
  const body = new FormData()

  for (const field of form.fields) {
    const { value } = field.state

    if (method === 'PATCH') {
      if (field.defaultValue === value) {
        continue
      }
    }

    if (Array.isArray(value)) {
      value.forEach(value => body.append(field.name, value))
      continue
    }

    body.append(field.name, value)
  }

  return body
}
