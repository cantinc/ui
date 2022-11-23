import { history, WatchProp } from '@innet/dom'

import { ToggleBar, ToggleBarProps, ToggleBarValue } from '../ToggleBar'

export interface SearchToggleBarProps extends Omit<ToggleBarProps, 'renderValue' | 'value' | 'onchange' | 'element'> {
  key: string
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

SearchToggleBar.componentName = 'SearchToggleBar'
