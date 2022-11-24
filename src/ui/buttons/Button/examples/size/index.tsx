import { example } from 'src/app/Component'
import { Button } from 'src/ui'

import description from './README.md'

export default example({
  id: 'size',
  title: 'Size',
  description,
  example: (
    <Button size='small'>Click Me</Button>
  ),
})
