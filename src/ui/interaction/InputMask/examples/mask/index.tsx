import { example } from 'src/app/Component'
import { Flex, InputMask } from 'src/ui'

import description from './README.md'

export default example({
  id: 'mask',
  title: 'mask',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { InputMask } from '@cantinc/ui'

innet(
  <Flex vertical>
    <InputMask mask='+7 (999) 999-99-99' />
    <InputMask
      mask={{
        mask: '+7 (999) 999-99-99',
        jitMasking: true,
      }}
    />
  </Flex>,
  dom,
)`,
  example: (
    <Flex vertical>
      <InputMask mask='+7 (999) 999-99-99' />
      <InputMask
        mask={{
          mask: '+7 (999) 999-99-99',
          jitMasking: true,
        }}
      />
    </Flex>
  ),
})
