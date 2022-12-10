import { example } from 'src/app/Component'
import { Card, Cards } from 'src/ui'

import description from './README.md'

export default example({
  id: 'clickable',
  title: 'clickable',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Card, Cards } from '@cantinc/ui'

innet(
  <Cards>
    {[...new Array(20)].map((_, index) => (
      <Card justify='center' align='center' style='width:270px;height:100px' clickable>
        Test #{index}
      </Card>
    ))}
  </Cards>,
  dom,
)`,
  example: (
    <Cards>
      {[...new Array(20)].map((_, index) => (
        <Card justify='center' align='center' style='width:270px;height:100px' clickable>
          Test #{index}
        </Card>
      ))}
    </Cards>
  ),
})
