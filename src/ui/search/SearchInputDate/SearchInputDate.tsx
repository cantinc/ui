import { parsedSearch, stringifySearch } from '@innet/dom'
import { historyPush, locationPath } from '@watch-state/history-api'

import { useChildrenProvider } from '../../../hooks'
import { inputDateFormat } from '../../../utils'
import { InputDate, type InputDateProps } from '../../interaction'

export interface SearchInputDateProps extends Omit<InputDateProps, 'value'> {
  key: string
}

export function SearchInputDate ({
  key,
  oninput,
  ...props
}: SearchInputDateProps) {
  const provider = useChildrenProvider()
  const handleChange = (date?: Date) => {
    const search = stringifySearch({
      ...parsedSearch.value,
      [key]: date && inputDateFormat(date),
    }, { addQueryPrefix: true })

    historyPush(`${locationPath.value}${search}`, -1)
    oninput?.(date)
  }

  return provider(
    <InputDate
      {...props}
      value={() => parsedSearch.value[key] ? new Date(String(parsedSearch.value[key])) : undefined}
      oninput={handleChange}
    />,
  )
}
