import { example } from 'src/app/Component'
import { Button, Form, FormCheckbox, notify } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Form, FormCheckbox, Button, Notifications } from '@cantinc/ui'

innet(
  <>
    <Form
      onsuccess={form => notify(
        Array.from(form.fields)[0].state.value,
      )}
      vertical>
      <FormCheckbox
        label='Subscribe for news'
        name='subscribe'
      />
      <Button>
        Test
      </Button>
    </Form>
    <Notifications />
  </>,
  dom,
)`,
  example: (
    <Form
      onsuccess={form => notify(
        Array.from(form.fields)[0].state.value,
      )}
      vertical>
      <FormCheckbox
        label='Subscribe for news'
        name='subscribe'
      />
      <Button>
        Test
      </Button>
    </Form>
  ),
})
