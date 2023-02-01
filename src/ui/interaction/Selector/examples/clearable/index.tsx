import { example } from 'src/app/Component'
import { Flex, type MenuOption, Selector } from 'src/ui'

import description from './README.md'

const data: MenuOption[] = [
  { value: '', label: 'Empty' },
  { value: 'Eminem' },
  { value: 'Linkin Park' },
  { value: 'Louis Armstrong' },
]
const genders: MenuOption[] = [
  { value: '', label: 'Empty' },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
]
const genres: MenuOption[] = [
  { value: '', label: 'Empty' },
  { value: 'Rap' },
  { value: 'Dance' },
  { value: 'Hip-Hop' },
  { value: 'Jazz' },
]

export default example({
  id: 'clearable',
  title: 'clearable',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex, Selector, MenuOption } from '@cantinc/ui'

const data: MenuOption[] = [
  { value: '', label: 'Empty' },
  { value: 'Eminem' },
  { value: 'Linkin Park' },
  { value: 'Louis Armstrong' },
]
const genders: MenuOption[] = [
  { value: '', label: 'Empty' },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
]
const genres: MenuOption[] = [
  { value: '', label: 'Empty' },
  { value: 'Rap' },
  { value: 'Dance' },
  { value: 'Hip-Hop' },
  { value: 'Jazz' },
]

innet(
  <Flex gap={[0, 16]} wrap>
    <Selector label='Search' values={data} />
    <Selector exact label='Gender' arrow values={genders} />
    <Selector search label='Genres' arrow values={genres} />
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={[0, 16]} wrap>
      <Selector label='Search' values={data} />
      <Selector exact label='Gender' arrow values={genders} />
      <Selector search label='Genres' arrow values={genres} />
    </Flex>
  ),
})
