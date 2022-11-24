import { example } from 'src/app/Component'
import { Button } from 'src/ui'

import description from './README.md'

export default example({
  id: 'link',
  title: 'Link',
  description,
  example: (
    <Button link={{ href: '/' }}>
      Go to home page
    </Button>
  ),
})
