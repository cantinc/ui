import { minLength, optional } from '@cantinc/utils'
import { example } from 'src/app/Component'
import { Button, Flex, Form, FormTextArea } from 'src/ui'

import description from './README.md'

const minValidator = optional<any, string>([minLength(5)])

export default example({
  id: 'validation',
  title: 'validation',
  description,
  example: (
    <Form align='stretch' notification='Success' vertical>
      <Flex wrap flex gap={16}>
        <FormTextArea label='Name' flex required name='name' />
        <FormTextArea validation={minValidator} label='Surname' flex name='surname' />
      </Flex>
      <Button>
        Send
      </Button>
    </Form>
  ),
})
