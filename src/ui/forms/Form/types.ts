import { ValidationError, Validator } from '@cantinc/utils'
import { StateProp } from '@innet/dom'
import { State } from 'watch-state'

import { FormContext } from '../../../hooks'
import { FlexProps } from '../../layout'

export type FormMethod = 'GET' | 'HEAD' | 'POST' | 'DELETE' | 'PUT' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'

export interface FormProps extends FlexProps<HTMLFormElement> {
  action?: StateProp<string>
  loading?: State<boolean>
  notification?: string
  method?: FormMethod
  onerror?: (form: FormContext, error?: any) => void
  onsuccess?: (form: FormContext) => void
}

export type FormErrorHandle = (error: ValidationError<any>, form: FormContext) => string | Promise<string>
export type FormActionHandle = (form: FormContext) => Promise<any> | any
export type FormNotificationHandle = (notification: string, form: FormContext) => void

export interface FormFieldProps <V = string> {
  name: string
  defaultValue?: V
  required?: boolean
  disabled?: boolean
  validation?: Validator<any, any>[]
  onchange?: (value: V) => void
}
