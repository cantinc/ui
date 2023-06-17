import { parsedSearch, stringifySearch } from '@innet/dom'
import { historyPush, locationPath } from '@watch-state/history-api'

import { useChildrenProvider } from '../../../hooks'
import { InputNumber, type InputNumberProps } from '../../interaction'

export interface SearchInputNumberProps extends Omit<InputNumberProps, 'value'> {
  key: string
}

export function SearchInputNumber ({
  key,
  oninput,
  ...props
}: SearchInputNumberProps) {
  const withChildren = useChildrenProvider()
  const handleChange = (val: number) => {
    const search = stringifySearch({
      ...parsedSearch.value,
      [key]: val ? String(val) : undefined,
    }, { addQueryPrefix: true })

    historyPush(`${locationPath.value}${search}`, -1)
    oninput?.(Number(val))
  }

  return withChildren(
    <InputNumber
      {...props}
      value={() => Number(parsedSearch.value[key] || 0)}
      oninput={handleChange}
    />,
  )
}
