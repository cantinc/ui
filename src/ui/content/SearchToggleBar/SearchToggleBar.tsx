import { history, WatchProp } from '@innet/dom'

import { ToggleBar, ToggleBarProps, ToggleBarValue } from '../../interaction'

export interface SearchToggleBarProps extends Pick<ToggleBarProps, 'values'> {
  key: string
  [key: string]: any
}

export function SearchToggleBar ({
  key,
  ...props
}: SearchToggleBarProps) {
  function defaultSearchToggleBarRender ({ value, label }: ToggleBarValue, className: WatchProp<string>) {
    return (
      <a
        class={className as any}
        href={value ? `?${key}=${value}` : '?'}>
        {label ?? value}
      </a>
    )
  }

  return (
    <ToggleBar
      {...props}
      value={() => history.getSearch(key) || ''}
      element='nav'
      renderValue={defaultSearchToggleBarRender}
    />
  )
}
