import { example } from 'src/app/Component'
import { Flex, Icon, icons } from 'src/ui'

import description from './README.md'

export default example({
  id: 'icons',
  title: 'icons',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Flex, Icon, icons } from '@cantinc/ui'

innet(
  <Flex gap={16} wrap>
    {icons.map(icon => (
      <Icon icon={icon}>
        {icon}
      </Icon>
    ))}
  </Flex>,
  dom,
)`,
  example: (
    <Flex gap={16} wrap>
      {icons.map((icon) => (
        <Icon icon={icon}>
          {icon}
        </Icon>
      ))}
    </Flex>
  ),
})
