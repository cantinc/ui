import { example } from 'src/app/Component'
import { Card, Cards } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const loading = new State(true)

const toggle = () => {
  loading.value = !loading.value
}

export default example({
  id: 'loading',
  title: 'loading',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Card, Cards } from '@cantinc/ui'

const loading = new State(true)

const toggle = () => {
  loading.value = !loading.value
}

innet(
  <Cards align='stretch'>
    <Card inline onclick={toggle}>
      Click me
    </Card>
    <Card flex loading={loading}>
      Test
    </Card>
  </Cards>,
  dom,
)`,
  example: (
    <Cards align='stretch'>
      <Card inline onclick={toggle}>
        Click me
      </Card>
      <Card flex loading={loading}>
        Test
      </Card>
    </Cards>
  ),
})
