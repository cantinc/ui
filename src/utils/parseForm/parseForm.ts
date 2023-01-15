import { use } from '@innet/dom'

import { FormContext } from '../../hooks'

export function parseForm (form: FormContext) {
  const data: Record<string, any> = {}
  const arrayData: Record<string, boolean> = {}

  for (const field of form.fields) {
    const { name, state: { value } } = field

    if (use(form.method) === 'PATCH') {
      if (field.defaultValue === value) {
        continue
      }
    }

    if (name in data) {
      if (name in arrayData) {
        data[name].push(value)
      } else {
        arrayData[name] = true
        data[name] = [data[name], value]
      }
    } else {
      data[name] = value
    }
  }

  return data
}
