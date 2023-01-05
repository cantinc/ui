import { example } from 'src/app/Component'
import { Slide, Slides } from 'src/ui'

import description from './README.md'

const slides: Slide[] = [
  { children: 1 },
  { children: 2 },
  { children: 3 },
]

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Slides, Slide } from '@cantinc/ui'

const slides: Slide[] = [
  { children: 1 },
  { children: 2 },
  { children: 3 },
]

innet(
  <Slides
    slideProps={{
      align: 'center',
      justify: 'center',
      style: { background: 'var(--color-80)', width: '90%' },
    }}
    gap={8}
    slides={slides}
    align='stretch'
  />,
  dom,
)`,
  example: (
    <Slides
      slideProps={{
        align: 'center',
        justify: 'center',
        style: { background: 'var(--color-80)', width: '90%' },
      }}
      gap={8}
      slides={slides}
      align='stretch'
    />
  ),
})
