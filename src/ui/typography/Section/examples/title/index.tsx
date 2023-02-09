import { example } from 'src/app/Component'
import { Button, Card, Section } from 'src/ui'

import description from './README.md'

export default example({
  id: 'title',
  title: 'title',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Section,
  Button,
  Card,
} from '@cantinc/ui'

innet(
  <Section title='Favourites'>
    <slot name='title'>
      <Button<HTMLAnchorElement>
        element='a'
        href='/'
        padding={[8, 24]}
        view='secondary'>
        Home
      </Button>
    </slot>
    <Card height={158} />
  </Section>,
  dom,
)`,
  example: (
    <Section title='Favourites'>
      <slot name='title'>
        <Button<HTMLAnchorElement>
          element='a'
          href='/'
          padding={[8, 24]}
          view='secondary'>
          Home
        </Button>
      </slot>
      <Card height={158} />
    </Section>
  ),
})
