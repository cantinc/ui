import { parsedSearch, type StateProp, stringifySearch, use } from '@innet/dom'
import { historyPush, locationPath } from '@watch-state/history-api'
import { Cache } from 'watch-state'

import { Toggle, type ToggleProps } from '../../interaction'

export interface SearchToggleProps extends Omit<ToggleProps, 'checked'> {
  key: string
  value?: StateProp<string>
}

export function SearchToggle ({
  key,
  value = 'true',
  onchange,
  ...props
}: SearchToggleProps) {
  const state = new Cache<boolean>(() => parsedSearch.value[key] === use(value))

  const handleChange = (val: boolean) => {
    const search = stringifySearch({
      ...parsedSearch.value,
      [key]: val ? use(value) : undefined,
    }, { addQueryPrefix: true })

    historyPush(`${locationPath.value}${search}`, -1)
    onchange?.(val)
  }

  return (
    <Toggle
      {...props}
      onchange={handleChange}
      checked={state}
    />
  )
}
