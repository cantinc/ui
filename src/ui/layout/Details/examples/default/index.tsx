import { example } from 'src/app/Component'
import { Details } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Details } from '@cantinc/ui'

innet(
  <Details summary='Click Me'>
    Details content here!
  </Details>,
  dom,
)`,
  example: (
    <Details summary='Click Me'>
      Details content here!
    </Details>
  ),
})
