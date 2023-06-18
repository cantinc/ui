import { getSearchParam } from '@watch-state/history-api'

import { ToggleBar, type ToggleBarItemOptions, type ToggleBarProps, type ToggleBarValue } from '../../interaction'

export interface SearchToggleBarProps extends ToggleBarProps {
  key: string
}

export function SearchToggleBar ({
  key,
  ...props
}: SearchToggleBarProps) {
  function defaultSearchToggleBarRender ({ value, label }: ToggleBarValue, { className, onfocus, onblur }: ToggleBarItemOptions) {
    return (
      <a
        onfocus={onfocus}
        onblur={onblur}
        onmouseenter={onfocus}
        onmousedown={(e: MouseEvent) => {
          e.preventDefault()
        }}
        class={className as any}
        scrollTo={-1}
        href={value ? `?${key}=${value}` : '?'}>
        {label ?? value}
      </a>
    )
  }

  return (
    <ToggleBar
      {...props}
      value={getSearchParam(key)}
      element='nav'
      renderValue={defaultSearchToggleBarRender}
    />
  )
}
