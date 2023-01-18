import { example } from 'src/app/Component'
import { Calendar } from 'src/ui'

import description from './README.md'

const startDate = new Date(2023, 0, 1)
const endDate = new Date(2023, 1, 4)
const min = startDate.getTime()
const max = endDate.getTime()

const handleActive = (date: Date) => {
  const time = date.getTime()

  return time > min && time < max
}
const handleDisable = (date: Date) => {
  const time = date.getTime()

  return time < min
}
const handleSelect = (date: Date) => {
  const time = date.getTime()

  return time === endDate.getTime() || time === startDate.getTime()
}

export default example({
  id: 'default',
  title: 'Default',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'

import { Calendar } from '@cantinc/ui'

innet(
  <Calendar />,
  dom,
)`,
  example: (
    <Calendar selectedHandler={handleSelect} disableHandler={handleDisable} activeHandler={handleActive} />
  ),
})
