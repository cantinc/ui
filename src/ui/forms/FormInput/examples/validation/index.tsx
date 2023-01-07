import { minLength, optional } from '@cantinc/utils'
import { example } from 'src/app/Component'
import { Button, Flex, Form, FormInput } from 'src/ui'

import description from './README.md'

const minValidator = optional<any, string>([minLength(5)])

export default example({
  id: 'validation',
  title: 'validation',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Button, Flex, Form, FormInput } from '@cantinc/ui'
import { minLength, optional } from '@cantinc/utils'

const minValidator = optional<any, string>([minLength(5)])

innet(
  <Form align='stretch' notification='Success' vertical>
    <Flex wrap flex gap={16}>
      <FormInput label='Name' flex required name='name' />
      <FormInput validation={minValidator} label='Surname' flex name='surname' />
    </Flex>
    <Button>
      Send
    </Button>
  </Form>,
  dom,
)`,
  example: (
    <Form align='stretch' notification='Success' vertical>
      <Flex wrap flex gap={16}>
        <FormInput label='Name' flex required name='name' />
        <FormInput validation={minValidator} label='Surname' flex name='surname' />
      </Flex>
      <Button>
        Send
      </Button>
    </Form>
  ),
})
