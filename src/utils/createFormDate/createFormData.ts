import { type FormContext } from '../../hooks'

export function appendFormDate (body: FormData, key: string, value: any) {
  if (typeof value === 'string') {
    body.append(key, value)
    return
  }

  if (Array.isArray(value)) {
    value.forEach(value => appendFormDate(body, key, value))
    return
  }

  if (value === null) {
    body.append(key, '')
    return
  }

  if (value instanceof File) {
    body.append(key, value)
    return
  }

  if (typeof value === 'object' && value.src && value.name) {
    body.append(key, new File([''], value.name))
  }
}

export function createFormData (form: FormContext) {
  const body = new FormData()

  for (const name in form.submitData) {
    appendFormDate(body, name, form.submitData[name])
  }

  return body
}
