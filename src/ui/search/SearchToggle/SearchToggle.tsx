import { history, parsedSearch, stringifySearch, use, WatchProp } from '@innet/dom'
import { Cache } from 'watch-state'

import { Toggle, ToggleProps } from '../../interaction'

export interface SearchToggleProps extends Omit<ToggleProps, 'value'> {
  key: string
  value?: WatchProp<string>
}

export function SearchToggle ({
  key,
  value = 'true',
  onchange,
  ...props
}: SearchToggleProps) {
  const state = new Cache<boolean>(() => history.getSearch(key) === use(value))

  const handleChange = (val: boolean) => {
    const search = stringifySearch({
      ...parsedSearch.value,
      [key]: val ? use(value) : undefined,
    }, { addQueryPrefix: true })

    history.push(`${history.path}${search}`)
    onchange?.(val)
  }

  return (
    <Toggle
      {...props}
      onchange={handleChange}
      value={() => state.value}
    />
  )
}
