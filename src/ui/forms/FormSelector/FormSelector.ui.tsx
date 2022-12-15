import { meta } from 'src/app/Component'

import { FormSelector } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof FormSelector>({
  component: FormSelector,
  name: 'FormSelector',
  description,
  examples,
})
