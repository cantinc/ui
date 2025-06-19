import { example } from 'src/app/Component'
import { Button, Card, Section } from 'src/ui'

import description from './README.md'

export default example({
  id: 'aside',
  title: 'aside',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Section,
  Button,
  Card,
} from '@cantinc/ui'

innet(
  <Section
    title='Favourites'
    aside={(
      <Button
        element='a'
        href='/'
        padding={[8, 24]}
        view='secondary'>
        Home
      </Button>
  )}>
    <Card height={158} />
  </Section>,
  dom,
)`,
  example: (
    <Section
      title='Favourites'
      aside={(
        <Button
          element='a'
          href='/'
          padding={[8, 24]}
          view='secondary'>
          Home
        </Button>
    )}>
      <Card height={158} />
    </Section>
  ),
})
