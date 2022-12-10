import { example } from 'src/app/Component'
import { Card, Cards } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Card, Cards } from '@cantinc/ui'

innet(
  <Cards>
    <Card>Card 1</Card>
    <Card>Card 2</Card>
    <Card>Card 3</Card>
  </Cards>,
  dom,
)`,
  example: (
    <Cards>
      <Card>Card 1</Card>
      <Card>Card 2</Card>
      <Card>Card 3</Card>
    </Cards>
  ),
})
