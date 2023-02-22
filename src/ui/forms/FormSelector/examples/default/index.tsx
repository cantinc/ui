import { example } from 'src/app/Component'
import { Button, Form, FormSelector, notify } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const rotation = new State('')
const size = new State('')

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import {
  Form,
  FormSelector,
  Button,
  notify,
  Notifications,
} from '@cantinc/ui'

const rotation = new State('')
const size = new State('')

innet(
  <div>
    <Form
      onsuccess={form => notify(
        Array.from(form.fields).map(({ name, state }) => \`\${name}: \${state.value}\`).join('\\n\\n'),
      )}
      vertical>
      <FormSelector
        name='size'
        label='Size'
        exact
        value={size}
        values={[
          { value: 'small', label: 'Small' },
          { value: 'mid', label: 'Mid' },
          { value: 'large', label: 'Large' },
        ]}
        required
      />
      <FormSelector
        name='rotation'
        label='Rotation'
        exact
        defaultValue='horizontal'
        value={rotation}
        values={[
          { value: 'horizontal', label: 'Horizontal' },
          { value: 'vertical', label: 'Vertical' },
        ]}
      />
      <Button>
        Send {rotation}/{size}
      </Button>
    </Form>
    <Notifications />
  </>,
  dom,
)`,
  example: (
    <Form
      onsuccess={form => notify(
        Array.from(form.fields).map(({ name, state }) => `${name}: ${state.value}`).join('\n\n'),
      )}
      vertical>
      <FormSelector
        name='size'
        label='Size'
        exact
        value={size}
        values={[
          { value: 'small', label: 'Small' },
          { value: 'mid', label: 'Mid' },
          { value: 'large', label: 'Large' },
        ]}
        required
      />
      <FormSelector
        name='rotation'
        label='Rotation'
        exact
        defaultValue='horizontal'
        value={rotation}
        values={[
          { value: 'horizontal', label: 'Horizontal' },
          { value: 'vertical', label: 'Vertical' },
        ]}
      />
      <Button>
        Send {rotation}/{size}
      </Button>
    </Form>
  ),
})
