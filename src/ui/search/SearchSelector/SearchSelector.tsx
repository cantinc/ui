import { parsedSearch, stringifySearch } from '@innet/dom'
import { historyPush, locationPath } from '@watch-state/history-api'

import { Selector, type SelectorProps } from '../../interaction'

export interface SearchSelectorProps extends Omit<SelectorProps, 'value'> {
  key: string
}

export function SearchSelector ({
  key,
  oninput,
  ...props
}: SearchSelectorProps) {
  const handleChange = (val: string) => {
    const search = stringifySearch({
      ...parsedSearch.value,
      [key]: val || undefined,
    }, { addQueryPrefix: true })

    historyPush(`${locationPath.value}${search}`, -1)
    oninput?.(val)
  }

  return (
    <Selector
      {...props}
      value={() => String(parsedSearch.value[key])}
      oninput={handleChange}
    />
  )
}
