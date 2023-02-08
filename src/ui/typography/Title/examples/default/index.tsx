import { example } from 'src/app/Component'
import { Title } from 'src/ui'

import description from './README.md'

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Title } from '@cantinc/ui'

innet(
  <>
    <Title>Heading 1</Title>
    <Title h={2}>Heading 2</Title>
    <Title h={3}>Heading 3</Title>
    <Title h={4}>Heading 4</Title>
    <Title h={5}>Heading 5</Title>
    <Title h={6}>Heading 6</Title>
  </>,
  dom,
)`,
  example: (
    <>
      <Title>Heading 1</Title>
      <Title h={2}>Heading 2</Title>
      <Title h={3}>Heading 3</Title>
      <Title h={4}>Heading 4</Title>
      <Title h={5}>Heading 5</Title>
      <Title h={6}>Heading 6</Title>
    </>
  ),
})
