import { example } from 'src/app/Component'
import { Flex, OptionProps, Selector } from 'src/ui'

import description from './README.md'

const data: OptionProps[] = [
  { value: 'Eminem' },
  { value: 'Linkin Park' },
  { value: 'Louis Armstrong' },
]
const genders: OptionProps[] = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
]
const genres: OptionProps[] = [
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

import { Flex, Selector, OptionProps } from '@cantinc/ui'

const data: OptionProps[] = [
  { value: 'Eminem' },
  { value: 'Linkin Park' },
  { value: 'Louis Armstrong' },
]
const genders: OptionProps[] = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
]
const genres: OptionProps[] = [
  { value: 'Rap' },
  { value: 'Dance' },
  { value: 'Hip-Hop' },
  { value: 'Jazz' },
]

innet(
  <Flex gap={[0, 16]} wrap>
    <Selector clearable label='Search' values={data} />
    <Selector clearable label='Gender' arrow values={genders} />
    <Selector clearable search label='Genres' arrow values={genres} />
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={[0, 16]} wrap>
      <Selector clearable label='Search' values={data} />
      <Selector clearable label='Gender' arrow values={genders} />
      <Selector clearable search label='Genres' arrow values={genres} />
    </Flex>
  ),
})
