import { parsedSearch, stringifySearch } from '@innet/dom'
import { historyPush, locationPath } from '@watch-state/history-api'

import { useChildrenProvider } from '../../../hooks'
import { Input, type InputProps } from '../../interaction'

export interface SearchInputProps extends Omit<InputProps, 'value'> {
  key: string
}

export function SearchInput ({
  key,
  oninput,
  ...props
}: SearchInputProps) {
  const provider = useChildrenProvider()
  const handleChange = (val: string) => {
    const search = stringifySearch({
      ...parsedSearch.value,
      [key]: val || undefined,
    }, { addQueryPrefix: true })

    historyPush(`${locationPath.value}${search}`, -1)
    oninput?.(val)
  }

  return provider(
    <Input
      {...props}
      value={() => String(parsedSearch.value[key] || '')}
      oninput={handleChange}
    />,
  )
}
