import { example } from 'src/app/Component'
import { Stories, type Story } from 'src/ui'

import description from './README.md'
import story1 from './story1.webp'
import story1_1 from './story1-1.webp'
import story1_2 from './story1-2.webp'
import story1_3 from './story1-3.webp'
import story2 from './story2.webp'
import story2_1 from './story2-1.webp'
import story2_2 from './story2-2.webp'
import story3 from './story3.webp'
import story3_1 from './story3_1.webp'

const stories: Story[] = [
  {
    preview: story1,
    slides: [story1_1, story1_2, story1_3],
    onread: () => console.log(1),
  },
  {
    preview: story2,
    unread: true,
    slides: [story2_1, story2_2],
    onread: () => console.log(2),
  },
  {
    preview: story3,
    unread: true,
    slides: [story3_1],
    onread: () => console.log(3),
  },
]

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Stories, Story } from '@cantinc/ui'

import story1 from './story1.jpg'
import story1_1 from './story1-1.webp'
import story1_2 from './story1-2.webp'
import story1_3 from './story1-3.webp'
import story2 from './story2.jpg'
import story2_1 from './story2-1.jpg'
import story2_2 from './story2-2.jpg'
import story3 from './story3.webp'
import story3_1 from './story3_1.jpg'

const stories: Story[] = [
  {
    preview: story1,
    slides: [story1_1, story1_2, story1_3],
  },
  {
    preview: story2,
    unread: true,
    slides: [story2_1, story2_2],
  },
  {
    preview: story3,
    unread: true,
    slides: [story3_1],
  },
]

innet(
  <Stories stories={stories} />,
  dom,
)`,
  example: (
    <Stories
      stories={stories}
    />
  ),
})
