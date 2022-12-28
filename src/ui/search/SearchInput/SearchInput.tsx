import { history, parsedSearch, stringifySearch } from '@innet/dom'

import { Input, InputProps } from '../../interaction'

export interface SearchInputProps extends Omit<InputProps, 'value'> {
  key: string
}

export function SearchInput ({
  key,
  oninput,
  ...props
}: SearchInputProps) {
  const handleChange = (val: string) => {
    const search = stringifySearch({
      ...parsedSearch.value,
      [key]: val || undefined,
    }, { addQueryPrefix: true })

    history.push(`${history.path}${search}`)
    oninput?.(val)
  }

  return (
    <Input
      {...props}
      value={() => history.getSearch(key)}
      oninput={handleChange}
    />
  )
}
