import { meta } from 'src/app/Component'

import { Image } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Image>({
  component: Image,
  name: 'Image',
  description,
  examples,
})
