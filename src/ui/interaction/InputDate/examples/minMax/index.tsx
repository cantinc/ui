import { example } from 'src/app/Component'
import { Flex, InputDate } from 'src/ui'

import description from './README.md'

export default example({
  id: 'minMax',
  title: 'min & max',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex,InputDate } from '@cantinc/ui'

innet(
  <Flex vertical>
    <InputDate
      min={new Date(2022, 0, 1)}
      max={new Date(2023, 10, 1)}
    />
    <InputDate
      min={new Date(2022, 10, 20)}
      max={new Date(2023, 0, 1)}
    />
    <InputDate
      min={new Date()}
    />
  </Flex>,
  dom,
)`,
  example: (
    <Flex vertical>
      <InputDate
        min={new Date(2022, 0, 1)}
        max={new Date(2023, 10, 1)}
      />
      <InputDate
        min={new Date(2022, 10, 20)}
        max={new Date(2023, 0, 1)}
      />
      <InputDate
        min={new Date()}
      />
    </Flex>
  ),
})
