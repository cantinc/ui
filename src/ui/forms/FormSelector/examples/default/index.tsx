import { example } from 'src/app/Component'
import { Button, Form, FormSelector, notify } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Form,
  FormSelector,
  Button,
  notify,
  Notifications,
} from '@cantinc/ui'

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
        values={[
          { value: 'horizontal', label: 'Horizontal' },
          { value: 'vertical', label: 'Vertical' },
        ]}
      />
      <Button>
        Send
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
        values={[
          { value: 'horizontal', label: 'Horizontal' },
          { value: 'vertical', label: 'Vertical' },
        ]}
      />
      <Button>
        Send
      </Button>
    </Form>
  ),
})
