import { example } from 'src/app/Component'
import {
  Button,
  Buttons,
  Form,
  FormSet,
  FormUpload,
  type FormUploadProps,
  Icon,
} from 'src/ui'

import description from './README.md'

export default example({
  id: 'upload',
  title: 'upload',
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
} from '@cantinc/ui'

innet(
  <Form vertical>
    <FormSet<FormUploadProps>
      element={FormUpload}
      required
      requiredSet
      name='files'
      label='File'>
      <Icon icon='plus' />
      Add a file
    </FormSet>
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
      <FormSet<FormUploadProps>
        element={FormUpload}
        required
        requiredSet
        name='files'
        label='File'>
        <Icon icon='plus' />
        Add a file
      </FormSet>
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
