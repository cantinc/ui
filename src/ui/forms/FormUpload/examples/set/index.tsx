import { example } from 'src/app/Component'
import {
  Button,
  Buttons, Flex,
  Form,
  FormSet,
  FormUpload,
  type FormUploadProps,
  Icon,
} from 'src/ui'

import description from './README.md'

export default example({
  id: 'set',
  title: 'set',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Form,
  FormSet,
  Button,
  Buttons,
  Icon,
  FormUploadProps,
  FormUpload,
  Flex,
} from '@cantinc/ui'

innet(
  <Form vertical>
    <Flex gap={8} wrap>
      <FormSet<FormUploadProps>
        flex
        element={FormUpload}
        required
        requiredSet
        width={90}
        height={160}
        name='files'
        label='File'>
        <Icon icon='plus' />
        Add a file
      </FormSet>
    </Flex>
    <Buttons>
      <Button view='secondary' flex type='reset'>
        Reset
      </Button>
      <Button flex>
        Submit
      </Button>
    </Buttons>
  </Form>,
  dom,
)`,
  example: (
    <Form vertical>
      <Flex gap={8} wrap>
        <FormSet<FormUploadProps>
          flex
          element={FormUpload}
          required
          requiredSet
          width={90}
          height={160}
          name='files'
          label='File'>
          <Icon icon='plus' />
          Add a file
        </FormSet>
      </Flex>
      <Buttons>
        <Button view='secondary' flex type='reset'>
          Reset
        </Button>
        <Button flex>
          Submit
        </Button>
      </Buttons>
    </Form>
  ),
})
