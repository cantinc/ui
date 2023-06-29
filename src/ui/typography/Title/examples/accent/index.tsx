import { example } from 'src/app/Component'
import { Title } from 'src/ui'

import description from './README.md'

export default example({
  id: 'accent',
  title: 'accent',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Title } from '@cantinc/ui'

innet(
  <>
    <Title accent>Heading 1</Title>
    <Title h={2} accent>Heading 2</Title>
    <Title h={3} accent>Heading 3</Title>
    <Title h={4} accent>Heading 4</Title>
    <Title h={5} accent>Heading 5</Title>
    <Title h={6} accent>Heading 6</Title>
  </>,
  dom,
)`,
  example: (
    <>
      <Title accent>Heading 1</Title>
      <Title h={2} accent>Heading 2</Title>
      <Title h={3} accent>Heading 3</Title>
      <Title h={4} accent>Heading 4</Title>
      <Title h={5} accent>Heading 5</Title>
      <Title h={6} accent>Heading 6</Title>
    </>
  ),
})
