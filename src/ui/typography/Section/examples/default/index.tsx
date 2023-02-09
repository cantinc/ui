import { example } from 'src/app/Component'
import { Card, Section } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Section, Card } from '@cantinc/ui'

innet(
  <Section title='Title'>
    <Card height={158} />
  </Section>,
  dom,
)`,
  example: (
    <Section title='Title'>
      <Card height={158} />
    </Section>
  ),
})
