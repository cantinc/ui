import { example } from 'src/app/Component'
import { CalendarTitle } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { CalendarTitle } from '@cantinc/ui'

innet(
  <CalendarTitle />,
  dom,
)`,
  example: (
    <CalendarTitle />
  ),
})
