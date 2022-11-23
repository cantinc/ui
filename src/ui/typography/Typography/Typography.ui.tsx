import { meta } from 'src/app/Component'

import { Typography } from '.'
import examples from './examples'
import description from './README.md'

export default meta<typeof Typography>({
  component: Typography,
  name: 'Typography',
  description,
  examples,
})
