import { use } from '@innet/dom'

import { FormContext } from '../../hooks'

export function createFormData (form: FormContext) {
  const body = new FormData()

  for (const field of form.fields) {
    const { value } = field.state

    if (use(form.method) === 'PATCH') {
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
