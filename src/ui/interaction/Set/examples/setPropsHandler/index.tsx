import { use } from '@innet/dom'
import { example } from 'src/app/Component'
import { Icon, Input, InputProps, Set, SetPropsHandler, setPropsHandler } from 'src/ui'

import description from './README.md'

const handleSetProps: SetPropsHandler<any> = ({
  index,
  value,
}, Component) => {
  if (Component === Input) {
    const { label, ...props } = value
    return ({
      ...props,
      label: label
        ? () => `${use(label)} ${index + 1}`
        : label,
    })
  }

  return value
}

export default example({
  id: 'setPropsHandler',
  title: 'setPropsHandler',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import {
  Set,
  Input,
  InputProps,
  Icon,
  setPropsHandler,
} from '@cantinc/ui'

const handleSetProps: SetPropsHandler<any> = ({
  index,
  value,
}, Component) => {
  if (Component === Input) {
    const { label, ...props } = value
    return ({
      ...props,
      label: label
        ? () => \`\${use(label)} \${index + 1}\`
        : label,
    })
  }

  return value
}

innet(
  <context for={setPropsHandler} set={handleSetProps}>
    <Set<InputProps>
      element={Input}
      label='Address'
      name='address'>
      <Icon icon='plus' />
      Add an address
    </Set>
  </context>,
  dom,
)`,
  example: (
    <context for={setPropsHandler} set={handleSetProps}>
      <Set<InputProps>
        element={Input}
        label='Address'
        name='address'>
        <Icon icon='plus' />
        Add an address
      </Set>
    </context>
  ),
})
