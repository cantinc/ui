import { example } from 'src/app/Component'
import { Button, Flex, Form, FormInput } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  example: (
    <Form align='stretch' notification='Success' vertical>
      <Flex wrap flex gap={16}>
        <FormInput label='Name' flex required name='name' />
        <FormInput label='Surname' flex required name='surname' />
      </Flex>
      <Button>
        Send
      </Button>
    </Form>
  ),
})
