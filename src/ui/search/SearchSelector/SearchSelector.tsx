import { history, parsedSearch, stringifySearch } from '@innet/dom'

import { Selector, SelectorProps } from '../../interaction'

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

    history.push(`${history.path}${search}`)
    oninput?.(val)
  }

  return (
    <Selector
      {...props}
      value={() => history.getSearch(key)}
      oninput={handleChange}
    />
  )
}
