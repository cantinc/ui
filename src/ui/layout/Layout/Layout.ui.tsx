import { meta } from 'src/app/Component'

import { Layout } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Layout>({
  component: Layout,
  name: 'Layout',
  description,
  examples,
})
