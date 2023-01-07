import { history, parsedSearch, stringifySearch } from '@innet/dom'

import { InputMask, InputMaskProps } from '../../interaction'

export interface SearchInputMaskProps extends Omit<InputMaskProps, 'value'> {
  key: string
}

export function SearchInputMask ({
  key,
  oninput,
  ...props
}: SearchInputMaskProps) {
  const handleChange = (val: string) => {
    const search = stringifySearch({
      ...parsedSearch.value,
      [key]: val || undefined,
    }, { addQueryPrefix: true })

    history.push(`${history.path}${search}`)
    oninput?.(val)
  }

  return (
    <InputMask
      {...props}
      value={() => String(parsedSearch.value[key] || '')}
      oninput={handleChange}
    />
  )
}
