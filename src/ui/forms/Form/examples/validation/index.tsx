import { ValidationError, ValidationMap } from '@cantinc/utils'
import { example } from 'src/app/Component'
import { Button, Buttons, Form, FormInput, notify } from 'src/ui'

import description from './README.md'

interface Body {
  name: string
  password: string
  password2: string
}

const notifications: Record<string, string> = {
  passwordEqual: 'Provided passwords should be equal',
}

const validation: ValidationMap<Body> = {
  password: [
    (value, key, { password2 }) => {
      if (value !== password2) {
        return {
          error: 'passwordEqual',
          data: {
            key,
          },
        }
      }
    },
  ],
}

const handleInvalid = (error: ValidationError<any>) => {
  if (error.error in notifications) {
    notify(notifications[error.error], 'error')
  } else {
    notify('Unknown error', 'error')
  }
}

export default example({
  id: 'validation',
  title: 'validation',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  ValidationError,
  ValidationMap,
} from '@cantinc/utils'

import {
  Form,
  FormInput,
  Button,
  Buttons,
  Notifications,
  notify,
} from '@cantinc/ui'

interface Body {
  name: string
  password: string
  password2: string
}

const notifications: Record<string, string> = {
  passwordEqual: 'Provided passwords should be equal',
}

const validation: ValidationMap<Body> = {
  password: [
    (value, key, { password2 }) => {
      if (value !== password2) {
        return {
          error: 'passwordEqual',
          data: {
            key,
          },
        }
      }
    },
  ],
}

const handleInvalid = (error: ValidationError<any>) => {
  if (error.error in notifications) {
    notify(notifications[error.error], 'error')
  } else {
    notify('Unknown error', 'error')
  }
}


innet(
  <>
    <Form oninvalid={handleInvalid} validation={validation}>
      <FormInput
        name='name'
        label='Name'
        required
      />
      <FormInput
        type='password'
        name='password'
        label='Password'
        required
      />
      <FormInput
        type='password'
        name='password2'
        label='Repeat password'
        required
      />
      <Buttons>
        <Button flex>
          Save
        </Button>
      </Buttons>
    </Form>
    <Notifications />
  </>,
  dom,
)`,
  example: (
    <Form oninvalid={handleInvalid} validation={validation}>
      <FormInput
        name='name'
        label='Name'
        required
      />
      <FormInput
        type='password'
        name='password'
        label='Password'
        required
      />
      <FormInput
        type='password'
        name='password2'
        label='Repeat password'
        required
      />
      <Buttons>
        <Button flex>
          Save
        </Button>
      </Buttons>
    </Form>
  ),
})
