import { example } from 'src/app/Component'
import { Calendar, CalendarGridCell, CalendarTitle } from 'src/ui'
import { State } from 'watch-state'

import description from './README.md'

const value = new State(new Date())
const rotationTop = new State(true)

const startDate = new Date(value.value.getFullYear(), value.value.getMonth(), 1)
const endDate = new Date(value.value.getFullYear(), value.value.getMonth() + 1, 4)
const min = startDate.getTime()
const max = endDate.getTime()

const handleActive = ({ date }: CalendarGridCell) => {
  const time = date.getTime()

  return time > min && time < max
}
const handleDisable = ({ date }: CalendarGridCell) => {
  const time = date.getTime()

  return time < min
}
const handleSelect = ({ date }: CalendarGridCell) => {
  const time = date.getTime()

  return time === endDate.getTime() || time === startDate.getTime()
}

export default example({
  id: 'title',
  title: 'title',
  description,
  code: `import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Calendar, CalendarTitle } from '@cantinc/ui'

const year = new State(new Date().getFullYear())
const month = new State(new Date().getMonth())
const rotationTop = new State(true)

const startDate = new Date(year.value, month.value, 1)
const endDate = new Date(year.value, month.value + 1, 4)
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

innet(
  <Calendar
    value={value}
    rotationTop={rotationTop}
    selectedHandler={handleSelect}
    disableHandler={handleDisable}
    activeHandler={handleActive}>
    <CalendarTitle
      rotationTop={rotationTop}
      value={value}
    />
  </Calendar>,
  dom,
)`,
  example: (
    <Calendar
      value={value}
      rotationTop={rotationTop}
      selectedHandler={handleSelect}
      disableHandler={handleDisable}
      activeHandler={handleActive}>
      <CalendarTitle
        rotationTop={rotationTop}
        value={value}
      />
    </Calendar>
  ),
})
