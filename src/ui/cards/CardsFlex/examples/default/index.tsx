import { example } from 'src/app/Component'
import { Card, Cards, CardsFlex } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Cards, Card, CardsFlex } from '@cantinc/ui'

innet(
  <Cards align='stretch'>
    <Card
      flex
      width={180}
      align='center'
      justify='center'
      clickable>
      Card 1
    </Card>
    <CardsFlex flex align='stretch' gap={24} vertical>
      <Card flex clickable>
        Card 2
      </Card>
      <Card flex clickable>
        Card 3
      </Card>
      <Card flex clickable>
        Card 4
      </Card>
    </CardsFlex>
    <CardsFlex flex align='stretch' gap={24} vertical>
      <Card align='center' flex clickable>
        Card 5
      </Card>
      <Card align='center' flex clickable>
        Card 6
      </Card>
    </CardsFlex>
  </Cards>,
  dom,
)`,
  example: (
    <Cards align='stretch'>
      <Card
        flex
        width={180}
        align='center'
        justify='center'
        clickable>
        Card 1
      </Card>
      <CardsFlex flex align='stretch' gap={24} vertical>
        <Card flex clickable>
          Card 2
        </Card>
        <Card flex clickable>
          Card 3
        </Card>
        <Card flex clickable>
          Card 4
        </Card>
      </CardsFlex>
      <CardsFlex flex align='stretch' gap={24} vertical>
        <Card align='center' flex clickable>
          Card 5
        </Card>
        <Card align='center' flex clickable>
          Card 6
        </Card>
      </CardsFlex>
    </Cards>
  ),
})
