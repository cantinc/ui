import { example } from 'src/app/Component'
import { BurgerButton } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { BurgerButton } from '@cantinc/ui'

innet(
  <BurgerButton />,
  dom,
)`,
  example: (
    <BurgerButton />
  ),
})
