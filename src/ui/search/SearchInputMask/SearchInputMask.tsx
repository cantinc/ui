import { parsedSearch, stringifySearch } from '@innet/dom'
import { historyPush, locationPath } from '@watch-state/history-api'

import { useChildrenProvider } from '../../../hooks'
import { InputMask, type InputMaskProps } from '../../interaction'

export interface SearchInputMaskProps extends Omit<InputMaskProps, 'value'> {
  key: string
}

export function SearchInputMask ({
  key,
  oninput,
  ...props
}: SearchInputMaskProps) {
  const withChildren = useChildrenProvider()
  const handleChange = (val: string) => {
    const search = stringifySearch({
      ...parsedSearch.value,
      [key]: val || undefined,
    }, { addQueryPrefix: true })

    historyPush(`${locationPath.value}${search}`, -1)
    oninput?.(val)
  }

  return withChildren(
    <InputMask
      {...props}
      value={() => String(parsedSearch.value[key] || '')}
      oninput={handleChange}
    />,
  )
}
